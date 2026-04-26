import { ArrowRight, Star, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CtaSection() {
  return (
    <section
      className="py-20 px-4 relative overflow-hidden"
      style={{ backgroundColor: "#100800" }}
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 20% 50%, #C41E3A 0%, transparent 60%), radial-gradient(ellipse at 80% 50%, #E8A020 0%, transparent 60%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, #E8A020 0, #E8A020 1px, transparent 0, transparent 40px), repeating-linear-gradient(90deg, #E8A020 0, #E8A020 1px, transparent 0, transparent 40px)",
        }}
      />

      <div className="relative text-center">
        <div
          className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center text-2xl"
          style={{ background: "linear-gradient(135deg, #C41E3A, #E8A020)" }}
        >
          🌶️
        </div>

        <p
          className="text-xs uppercase tracking-widest font-semibold mb-3"
          style={{ color: "#E8A020" }}
        >
          ✦ Your kitchen awaits
        </p>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
          Ready to cook
          <br />
          <span style={{ color: "#E8A020" }}>smarter?</span>
        </h2>
        <p
          className="font-light mb-8 text-lg max-w-md mx-auto"
          style={{ color: "#9A7A5A" }}
        >
          Join thousands of home cooks using ChefAI every week to save money and
          eat better.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-6">
          <Link href="/dashboard">
            <Button
              className="font-semibold px-8 h-12 rounded-xl text-sm gap-2 transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#C41E3A", color: "white" }}
            >
              Get Started Free <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
          <Link href="/recipes">
            <Button
              variant="outline"
              className="font-semibold px-8 h-12 rounded-xl text-sm bg-transparent hover:bg-white/10"
              style={{ borderColor: "rgba(232,160,32,0.4)", color: "#E8A020" }}
            >
              Browse Recipes
            </Button>
          </Link>
        </div>

        <p className="text-xs" style={{ color: "#5A3A20" }}>
          No credit card required · Cancel anytime
        </p>

        <div
          className="mt-10 inline-flex items-center gap-4 px-6 py-3 rounded-full border text-xs"
          style={{
            borderColor: "#2D1500",
            backgroundColor: "#1A0A00",
            color: "#9A7A5A",
          }}
        >
          <span className="flex items-center gap-1.5">
            <span className="text-base">👨‍🍳</span> 50,000+ active cooks
          </span>
          <span className="w-px h-3 bg-stone-700" />
          <span className="flex items-center gap-1.5">
            <Star className="w-3 h-3 fill-amber-400 text-amber-400" /> 4.9
            average rating
          </span>
          <span className="w-px h-3 bg-stone-700" />
          <span className="flex items-center gap-1.5">
            <Leaf className="w-3 h-3 text-green-500" /> Zero food waste mission
          </span>
        </div>
      </div>
    </section>
  );
}
