import { auth } from "@clerk/nextjs/server";
import { STATS } from "@/lib/data";
import PricingSection from "@/components/PricingSection";
import HeroSection from "@/components/landing/HeroSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import CuisinesSection from "@/components/landing/CuisinesSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import CtaSection from "@/components/landing/CtaSection";

export default async function LandingPage() {
  const { has } = await auth();
  const subscriptionTier = has({ plan: "pro" }) ? "pro" : "free";

  return (
    <div className="min-h-screen bg-[#FAF8F3] text-stone-900 font-sans">
      <HeroSection />

      {/* ── STATS ── */}
      <section
        className="py-10 border-y"
        style={{ backgroundColor: "#1A0A00", borderColor: "#2D1200" }}
      >
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-4 text-center">
          {STATS.map((s, i) => (
            <div key={i}>
              <div className="text-3xl font-bold text-white mb-1">{s.val}</div>
              <div
                className="text-xs uppercase tracking-widest font-medium"
                style={{ color: "#9A7A5A" }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <FeaturesSection />
      <HowItWorksSection />
      <CuisinesSection />
      <TestimonialsSection />

      {/* ── PRICING ── */}
      <section className="py-24 px-4 bg-white border-t border-stone-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p
              className="text-xs uppercase tracking-widest font-semibold mb-3"
              style={{ color: "#C41E3A" }}
            >
              ✦ Pricing
            </p>
            <h2 className="text-4xl font-bold text-stone-900 mb-3">
              Simple, honest pricing
            </h2>
            <p className="text-stone-500 font-light">
              Start free. Upgrade only if you need more.
            </p>
          </div>
          <PricingSection subscriptionTier={subscriptionTier} />
        </div>
      </section>

      <CtaSection />
    </div>
  );
}
