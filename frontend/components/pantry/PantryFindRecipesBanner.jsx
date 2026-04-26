import Link from "next/link";
import { FlameKindling } from "lucide-react";

export default function PantryFindRecipesBanner({ itemCount }) {
  return (
    <Link href="/pantry/recipes" className="block mb-10">
      <div
        className="group rounded-3xl p-6 flex items-center gap-5 transition-all duration-300 hover:shadow-2xl cursor-pointer"
        style={{
          backgroundColor: "#1a0a00",
          border: "1px solid #2e1200",
          boxShadow: "0 8px 40px rgba(192,57,43,0.12)",
        }}
      >
        <div
          className="p-3 rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform"
          style={{
            backgroundColor: "rgba(192,57,43,0.2)",
            border: "1px solid rgba(192,57,43,0.3)",
          }}
        >
          <FlameKindling className="w-7 h-7" style={{ color: "#e67e22" }} />
        </div>

        <div className="flex-1">
          <h3
            className="font-black text-lg mb-0.5 group-hover:text-orange-400 transition-colors"
            style={{ color: "#fff" }}
          >
            What can I cook right now?
          </h3>
          <p className="text-sm font-light" style={{ color: "#a87d5e" }}>
            AI will match recipes to your {itemCount} ingredients instantly
          </p>
        </div>

        <span
          className="hidden sm:block text-xs font-bold px-3 py-1.5 rounded-full"
          style={{
            backgroundColor: "rgba(255,255,255,0.07)",
            color: "#c9a87c",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          {itemCount} ITEMS
        </span>
      </div>
    </Link>
  );
}
