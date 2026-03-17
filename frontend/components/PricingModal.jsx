"use client";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import PricingSection from "./PricingSection";

export default function PricingModal({ subscriptionTier = "free", children }) {
  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>

      <DialogContent className="p-8 sm:max-w-4xl">
        <PricingSection />
      </DialogContent>
    </Dialog>
  );
}
