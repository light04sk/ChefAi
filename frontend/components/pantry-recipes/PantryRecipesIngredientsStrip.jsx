import { Package } from "lucide-react";

export default function PantryRecipesIngredientsStrip({ ingredientsUsed }) {
  if (!ingredientsUsed) return null;

  return (
    <div
      className="flex items-start gap-4 p-5 rounded-2xl mb-8"
      style={{
        backgroundColor: "#fff",
        border: "1px solid #ede0d4",
        boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
      }}
    >
      <div
        className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{ backgroundColor: "#fff3e0" }}
      >
        <Package className="w-5 h-5" style={{ color: "#c0392b" }} />
      </div>
      <div>
        <p
          className="text-xs font-bold uppercase tracking-widest mb-1"
          style={{ color: "#c9a87c" }}
        >
          Ingredients in use
        </p>
        <p
          className="text-sm font-light leading-relaxed"
          style={{ color: "#3d1f0d" }}
        >
          {ingredientsUsed}
        </p>
      </div>
    </div>
  );
}
