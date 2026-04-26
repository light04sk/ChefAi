import { Plus, Archive } from "lucide-react";

export default function PantryEmptyState({ onAddClick }) {
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
        <Archive className="w-10 h-10" style={{ color: "#e67e22" }} />
      </div>

      <h3 className="text-2xl font-black mb-3" style={{ color: "#fff" }}>
        Your pantry is bare.
      </h3>
      <p
        className="mb-8 max-w-sm mx-auto font-light"
        style={{ color: "#a87d5e" }}
      >
        Scan your fridge with AI or add ingredients one by one — then watch the
        recipe magic happen.
      </p>

      <button
        onClick={onAddClick}
        className="flex items-center gap-2 text-sm font-bold px-6 py-3 rounded-xl mx-auto transition-opacity hover:opacity-90"
        style={{
          background: "linear-gradient(135deg, #c0392b, #e67e22)",
          color: "#fff",
          boxShadow: "0 4px 20px rgba(192,57,43,0.4)",
        }}
      >
        <Plus className="w-4 h-4" />
        Add Your First Ingredient
      </button>
    </div>
  );
}
