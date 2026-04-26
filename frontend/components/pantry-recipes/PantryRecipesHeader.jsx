import { Sparkles } from "lucide-react";

export default function PantryRecipesHeader({ recommendationsLimit }) {
  return (
    <div className="mb-12">
      <span
        className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full mb-5"
        style={{
          backgroundColor: "#fff3e0",
          color: "#c0392b",
          border: "1px solid #f5c6a0",
        }}
      >
        <Sparkles className="w-3 h-3" />
        {recommendationsLimit === "unlimited"
          ? "∞ Unlimited AI recommendations — Pro Plan"
          : "AI-powered suggestions"}
      </span>

      <h1
        className="text-4xl md:text-6xl font-black mb-4 leading-tight tracking-tight"
        style={{ color: "#1a0a00" }}
      >
        What can I{" "}
        <span
          className="italic"
          style={{
            background: "linear-gradient(90deg, #c0392b, #e67e22)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          cook today?
        </span>
      </h1>

      <p className="text-lg font-light max-w-xl" style={{ color: "#7a5c44" }}>
        Recipes matched to exactly what&apos;s sitting in your kitchen right
        now.
      </p>
    </div>
  );
}
