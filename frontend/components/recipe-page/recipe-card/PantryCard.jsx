import Link from "next/link";
import { Clock, Users, ArrowRight } from "lucide-react";

export default function PantryCard({ data }) {
  const totalTime = parseInt(data.prepTime || 0) + parseInt(data.cookTime || 0);
  const matchBg =
    data.matchPercentage >= 90
      ? "#16a34a"
      : data.matchPercentage >= 75
        ? "#c0392b"
        : "#78716c";

  return (
    <div
      className="flex flex-col rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
      style={{
        backgroundColor: "#fff",
        border: "1px solid #ede0d4",
        boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
      }}
    >
      <div className="flex flex-col flex-1 p-5">
        {/* Tags + match % */}
        <div className="flex items-start justify-between gap-2 mb-3">
          <div className="flex flex-wrap gap-1.5">
            {data.cuisine && (
              <span
                className="text-xs font-semibold px-2.5 py-0.5 rounded-full capitalize"
                style={{
                  backgroundColor: "#fff3e0",
                  color: "#c0392b",
                  border: "1px solid #f5c6a0",
                }}
              >
                {data.cuisine}
              </span>
            )}
            {data.category && (
              <span
                className="text-xs font-semibold px-2.5 py-0.5 rounded-full capitalize"
                style={{
                  backgroundColor: "#faf7f2",
                  color: "#7a5c44",
                  border: "1px solid #ede0d4",
                }}
              >
                {data.category}
              </span>
            )}
          </div>
          {data.matchPercentage && (
            <span
              className="text-xs font-bold px-2.5 py-0.5 rounded-full flex-shrink-0"
              style={{ backgroundColor: matchBg, color: "#fff" }}
            >
              {data.matchPercentage}%
            </span>
          )}
        </div>

        <h3
          className="text-lg font-black mb-2 leading-snug"
          style={{ color: "#1a0a00" }}
        >
          {data.title}
        </h3>

        {data.description && (
          <p
            className="text-sm font-light mb-4 leading-relaxed line-clamp-2"
            style={{ color: "#7a5c44" }}
          >
            {data.description}
          </p>
        )}

        {(totalTime > 0 || data.servings) && (
          <div className="flex gap-4 text-xs mb-4" style={{ color: "#7a5c44" }}>
            {totalTime > 0 && (
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {totalTime} mins
              </span>
            )}
            {data.servings && (
              <span className="flex items-center gap-1">
                <Users className="w-3.5 h-3.5" />
                {data.servings} servings
              </span>
            )}
          </div>
        )}

        {data.missingIngredients?.length > 0 && (
          <div
            className="p-3.5 rounded-xl mb-4"
            style={{ backgroundColor: "#fff3e0", border: "1px solid #f5c6a0" }}
          >
            <p className="text-xs font-bold mb-2" style={{ color: "#c0392b" }}>
              You&apos;ll still need:
            </p>
            <div className="flex flex-wrap gap-1.5">
              {data.missingIngredients.map((ing, i) => (
                <span
                  key={i}
                  className="text-xs px-2 py-0.5 rounded-full"
                  style={{
                    backgroundColor: "#fff",
                    color: "#7a5c44",
                    border: "1px solid #ede0d4",
                  }}
                >
                  {ing}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="mt-auto">
          <Link href={data.href} className="block">
            <button
              className="w-full py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-opacity hover:opacity-90"
              style={{
                background: "linear-gradient(135deg, #2d6a4f, #40916c)",
                color: "#fff",
                boxShadow: "0 4px 14px rgba(45,106,79,0.3)",
              }}
            >
              View Full Recipe <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
