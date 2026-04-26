import { Sparkles, FlameKindling } from "lucide-react";
import PricingModal from "@/components/PricingModal";

export default function PantryRecipesRateLimit() {
  return (
    <div
      className="rounded-3xl p-14 text-center"
      style={{
        backgroundColor: "#1a0a00",
        border: "1px solid #2e1200",
        boxShadow: "0 8px 40px rgba(192,57,43,0.12)",
      }}
    >
      <div
        className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6"
        style={{
          backgroundColor: "rgba(192,57,43,0.2)",
          border: "1px solid rgba(192,57,43,0.3)",
        }}
      >
        <FlameKindling className="w-10 h-10" style={{ color: "#e67e22" }} />
      </div>
      <h3 className="text-2xl font-black mb-3" style={{ color: "#fff" }}>
        Monthly limit reached.
      </h3>
      <p
        className="font-light mb-8 max-w-sm mx-auto"
        style={{ color: "#a87d5e" }}
      >
        You&apos;ve used all your AI recommendations this month. Go Pro for
        unlimited suggestions every day.
      </p>
      <PricingModal>
        <button
          className="inline-flex items-center gap-2 text-sm font-bold px-6 py-3 rounded-xl transition-opacity hover:opacity-90"
          style={{
            background: "linear-gradient(135deg, #c0392b, #e67e22)",
            color: "#fff",
            boxShadow: "0 4px 20px rgba(192,57,43,0.4)",
          }}
        >
          <Sparkles className="w-4 h-4" />
          Upgrade to Pro
        </button>
      </PricingModal>
    </div>
  );
}
