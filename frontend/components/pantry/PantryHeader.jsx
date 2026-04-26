import { Plus, Sparkles } from "lucide-react";

export default function PantryHeader({ scansLimit, onAddClick }) {
  return (
    <div className="mb-14">
      <span
        className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full mb-5"
        style={{
          backgroundColor: "#fff3e0",
          color: "#c0392b",
          border: "1px solid #f5c6a0",
        }}
      >
        <Sparkles className="w-3 h-3" />
        {scansLimit === "unlimited"
          ? "∞ Unlimited AI scans — Pro Plan"
          : "Upgrade to Pro for unlimited scans"}
      </span>

      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div>
          <h1
            className="text-4xl md:text-6xl font-black mb-4 leading-tight tracking-tight"
            style={{ color: "#1a0a00" }}
          >
            What&apos;s in your{" "}
            <span
              className="italic"
              style={{
                background: "linear-gradient(90deg, #c0392b, #e67e22)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              kitchen?
            </span>
          </h1>
          <p className="text-lg font-light" style={{ color: "#7a5c44" }}>
            Track your ingredients and let AI figure out what to cook next.
          </p>
        </div>

        <button
          onClick={onAddClick}
          className="self-start md:self-auto flex items-center gap-2 text-sm font-bold px-5 py-3 rounded-xl whitespace-nowrap transition-opacity hover:opacity-90"
          style={{
            background: "linear-gradient(135deg, #c0392b, #e67e22)",
            color: "#fff",
            boxShadow: "0 4px 20px rgba(192,57,43,0.35)",
          }}
        >
          <Plus className="w-4 h-4" />
          Stock the Pantry
        </button>
      </div>
    </div>
  );
}
