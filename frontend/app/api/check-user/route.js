import { checkUser } from "@/lib/checkUser";

export async function GET() {
  const user = await checkUser();
  return Response.json(user);
}
