"use client";

import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { X } from "lucide-react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import PricingSection from "./PricingSection";

export default function PricingModal({ subscriptionTier = "free", children }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent className="w-[95vw] max-w-[95vw] sm:max-w-2xl lg:max-w-4xl max-h-[92dvh] overflow-y-auto p-5 sm:p-8 rounded-2xl sm:rounded-3xl focus:outline-none [&>button]:hidden">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <DialogTitle className="text-2xl sm:text-3xl font-semibold tracking-tight leading-tight">
              Simple pricing
            </DialogTitle>
            <DialogDescription className="text-stone-500 mt-1 text-sm sm:text-base">
              Start for free. Upgrade to unlock AI chef powers.
            </DialogDescription>
          </div>

          {/* Custom close button — always visible on all screen sizes */}
          <DialogPrimitive.Close className="shrink-0 mt-0.5 rounded-full p-1.5 text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-400">
            <X className="w-5 h-5" />
          </DialogPrimitive.Close>
        </div>

        {/* Pricing Cards */}
        <div className="mt-4 sm:mt-6">
          <PricingSection />
        </div>
      </DialogContent>
    </Dialog>
  );
}
