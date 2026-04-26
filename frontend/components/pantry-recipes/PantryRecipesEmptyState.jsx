import Link from "next/link";
import { Sparkles, ChefHat } from "lucide-react";

export default function PantryRecipesEmptyState() {
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
          backgroundColor: "rgba(255,255,255,0.07)",
          border: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <ChefHat className="w-10 h-10" style={{ color: "#e67e22" }} />
      </div>
      <h3 className="text-2xl font-black mb-3" style={{ color: "#fff" }}>
        Your pantry is empty.
      </h3>
      <p
        className="font-light mb-8 max-w-sm mx-auto"
        style={{ color: "#a87d5e" }}
      >
        Add some ingredients first and we&apos;ll find recipes you can actually
        cook.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link href="/pantry">
          <button
            className="inline-flex items-center gap-2 text-sm font-bold px-5 py-3 rounded-xl transition-opacity hover:opacity-90"
            style={{
              background: "linear-gradient(135deg, #c0392b, #e67e22)",
              color: "#fff",
              boxShadow: "0 4px 20px rgba(192,57,43,0.4)",
            }}
          >
            <Sparkles className="w-4 h-4" />
            Scan with AI
          </button>
        </Link>
        <Link href="/pantry">
          <button
            className="inline-flex items-center gap-2 text-sm font-bold px-5 py-3 rounded-xl transition-colors"
            style={{
              backgroundColor: "rgba(255,255,255,0.07)",
              color: "#c9a87c",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            Add Manually
          </button>
        </Link>
      </div>
    </div>
  );
}
