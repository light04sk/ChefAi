"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Cookie, Refrigerator, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import PricingModal from "./PricingModal";
import UserDropdown from "./UserDropdown";
import { SignInButton, SignUpButton } from "@clerk/nextjs";

const Header = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/api/check-user")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  const subscriptionTier = user?.subscriptionTier || "free";

  return (
    <header className="fixed top-0 w-full border-b border-stone-200 bg-stone-50/80 backdrop-blur-md z-50">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href={user ? "/dashboard" : "/"}>ChefAi</Link>

        {/* Navigation */}
        {user && (
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-stone-600">
            <Link
              href="/recipes"
              className="hover:text-orange-600 flex gap-1.5 items-center"
            >
              <Cookie className="w-4 h-4" /> My Recipes
            </Link>
            <Link
              href="/pantry"
              className="hover:text-orange-600 flex gap-1.5 items-center"
            >
              <Refrigerator className="w-4 h-4" /> My Pantry
            </Link>
          </div>
        )}

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {user ? (
            <>
              <PricingModal subscriptionTier={subscriptionTier}>
                <Badge className="flex h-8 px-3 gap-1.5 rounded-full text-xs font-semibold cursor-pointer">
                  <Sparkles className="h-3 w-3" />
                  {subscriptionTier === "pro" ? "Pro Chef" : "Free Plan"}
                </Badge>
              </PricingModal>
              <UserDropdown />
            </>
          ) : (
            <>
              <SignInButton mode="modal">
                <Button variant="ghost">Sign In</Button>
              </SignInButton>
              <SignUpButton mode="modal">
                <Button>Get Started</Button>
              </SignUpButton>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
