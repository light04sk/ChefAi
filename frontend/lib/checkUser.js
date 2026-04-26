import { auth, currentUser } from "@clerk/nextjs/server";

const STRAPI_URL =
  process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN;

export const checkUser = async () => {
  // 1. Get current Clerk user
  const clerkUser = await currentUser();

  if (!clerkUser) {
    return null;
  }

  if (!STRAPI_API_TOKEN) {
    console.error("❌ STRAPI_API_TOKEN is missing in .env.local");
    return null;
  }

  let subscriptionTier = "free";
  try {
    const { has } = await auth();
    subscriptionTier = has({ plan: "pro" }) ? "pro" : "free";
  } catch (err) {
    console.warn(
      "⚠️ Clerk Commerce plan check failed — defaulting to 'free':",
      err?.message,
    );
  }

  const email = clerkUser.emailAddresses[0]?.emailAddress;
  if (!email) {
    console.error("❌ No email found on Clerk user");
    return null;
  }

  try {
    // 3. Look up user in Strapi by clerkId
    const lookupResponse = await fetch(
      `${STRAPI_URL}/api/users?filters[clerkId][$eq]=${encodeURIComponent(clerkUser.id)}`,
      {
        headers: {
          Authorization: `Bearer ${STRAPI_API_TOKEN}`,
        },
        cache: "no-store",
      },
    );

    if (!lookupResponse.ok) {
      console.error("❌ Strapi lookup failed:", await lookupResponse.text());
      return null;
    }

    const rawUsers = await lookupResponse.json();

    const existingUsers = Array.isArray(rawUsers)
      ? rawUsers
      : Array.isArray(rawUsers?.data)
        ? rawUsers.data
        : [];

    // 4. User already exists — update subscription tier if needed and return
    if (existingUsers.length > 0) {
      const existingUser = existingUsers[0];

      console.log("✅ Existing user found in Strapi:", existingUser.id);

      if (existingUser.subscriptionTier !== subscriptionTier) {
        const updateRes = await fetch(
          `${STRAPI_URL}/api/users/${existingUser.id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${STRAPI_API_TOKEN}`,
            },
            body: JSON.stringify({ subscriptionTier }),
          },
        );

        if (!updateRes.ok) {
          console.error(
            "❌ Failed to update subscription tier:",
            await updateRes.text(),
          );
        } else {
          console.log(
            `✅ Subscription tier updated to '${subscriptionTier}' for user:`,
            existingUser.id,
          );
        }
      }

      return { ...existingUser, subscriptionTier };
    }

    // 5. New user — get the authenticated role from Strapi
    const rolesResponse = await fetch(
      `${STRAPI_URL}/api/users-permissions/roles`,
      {
        headers: {
          Authorization: `Bearer ${STRAPI_API_TOKEN}`,
        },
        cache: "no-store",
      },
    );

    if (!rolesResponse.ok) {
      console.error("❌ Failed to fetch Strapi roles");
      return null;
    }

    const rolesData = await rolesResponse.json();
    const authenticatedRole = rolesData.roles?.find(
      (role) => role.type === "authenticated",
    );

    if (!authenticatedRole) {
      console.error("❌ Authenticated role not found in Strapi");
      return null;
    }

    // 6. Create new user in Strapi
    const securePassword = crypto.randomUUID() + crypto.randomUUID();

    const newUserPayload = {
      username:
        clerkUser.username ||
        email.split("@")[0] + "_" + clerkUser.id.slice(-6),
      email,
      password: securePassword,
      confirmed: true,
      blocked: false,
      role: authenticatedRole.id,
      clerkId: clerkUser.id,
      firstName: clerkUser.firstName || "",
      lastName: clerkUser.lastName || "",
      imageUrl: clerkUser.imageUrl || "",
      subscriptionTier,
    };

    const createResponse = await fetch(`${STRAPI_URL}/api/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${STRAPI_API_TOKEN}`,
      },
      body: JSON.stringify(newUserPayload),
    });

    if (!createResponse.ok) {
      console.error("❌ Failed to create user:", await createResponse.text());
      return null;
    }

    const newUser = await createResponse.json();
    console.log("✅ New user created in Strapi:", newUser.id);
    return newUser;
  } catch (error) {
    console.error("❌ checkUser error:", error.message);
    return null;
  }
};
