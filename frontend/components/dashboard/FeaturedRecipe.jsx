import { Globe, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function FeaturedRecipe({ recipe }) {
  return (
    <section className="mb-24">
      <div className="flex items-center justify-between mb-6">
        <div>
          <p
            className="text-xs uppercase tracking-widest mb-1 font-semibold"
            style={{ color: "#e67e22" }}
          >
            ✦ Featured
          </p>
          <h2
            className="text-2xl md:text-3xl font-black"
            style={{ color: "#1a0a00" }}
          >
            Popular right now
          </h2>
        </div>

        <span
          className="text-xs px-3 py-1.5 rounded-full font-semibold"
          style={{ backgroundColor: "#c0392b", color: "#fff" }}
        >
          🔥 Trending
        </span>
      </div>

      <Link href={`/recipe?cook=${encodeURIComponent(recipe.strMeal)}`}>
        <div
          className="group grid md:grid-cols-2 rounded-3xl overflow-hidden transition-all duration-300 cursor-pointer hover:shadow-2xl"
          style={{
            backgroundColor: "#1a0a00",
            boxShadow: "0 8px 40px rgba(192,57,43,0.15)",
            border: "1px solid #2e1200",
          }}
        >
          {/* Image side */}
          <div className="relative h-64 md:h-full overflow-hidden">
            <Image
              src={recipe.strMealThumb}
              alt={recipe.strMeal}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to right, transparent 60%, #1a0a00)",
              }}
            />
            <div
              className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold shadow"
              style={{ backgroundColor: "#c0392b", color: "#fff" }}
            >
              🔥 Trending recipe
            </div>
          </div>

          {/* Content side */}
          <div className="p-6 md:p-10 flex flex-col justify-center">
            <div className="flex flex-wrap gap-2 mb-4">
              <span
                className="text-xs px-2.5 py-1 rounded-full font-semibold"
                style={{
                  backgroundColor: "rgba(192,57,43,0.2)",
                  color: "#f5a97f",
                  border: "1px solid rgba(192,57,43,0.3)",
                }}
              >
                {recipe.strCategory}
              </span>
              <span
                className="text-xs px-2.5 py-1 rounded-full flex items-center gap-1 font-medium"
                style={{
                  backgroundColor: "rgba(255,255,255,0.07)",
                  color: "#c9a87c",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <Globe className="w-3 h-3" />
                {recipe.strArea}
              </span>
            </div>

            <h3
              className="text-3xl md:text-4xl font-black mb-3 leading-tight group-hover:text-orange-400 transition-colors"
              style={{ color: "#fff" }}
            >
              {recipe.strMeal}
            </h3>

            <p
              className="text-sm md:text-base mb-6 line-clamp-3 font-light"
              style={{ color: "#a87d5e" }}
            >
              {recipe.strInstructions?.substring(0, 140)}...
            </p>

            {recipe.strTags && (
              <div className="flex flex-wrap gap-2 mb-6">
                {recipe.strTags
                  .split(",")
                  .slice(0, 3)
                  .map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 rounded-md font-medium"
                      style={{
                        backgroundColor: "rgba(255,255,255,0.06)",
                        color: "#c9a87c",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                    >
                      #{tag.trim()}
                    </span>
                  ))}
              </div>
            )}

            <button
              className="w-fit flex items-center gap-2 text-sm font-bold px-5 py-3 rounded-xl transition-all duration-200 hover:opacity-90"
              style={{
                background: "linear-gradient(135deg, #c0392b, #e67e22)",
                color: "#fff",
                boxShadow: "0 4px 20px rgba(192,57,43,0.4)",
              }}
            >
              View recipe
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </Link>
    </section>
  );
}
