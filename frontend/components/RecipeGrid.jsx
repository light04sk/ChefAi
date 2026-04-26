"use client";

import { useEffect } from "react";
import { ArrowLeft, Loader2, Utensils } from "lucide-react";
import Link from "next/link";
import useFetch from "@/hooks/use-fetch";
import RecipeCard from "@/components/RecipeCard";

export default function RecipeGrid({
  type,
  value,
  fetchAction,
  backLink = "/dashboard",
}) {
  const { loading, data, fn: fetchMeals } = useFetch(fetchAction);

  useEffect(() => {
    if (value) {
      const formattedValue = value.charAt(0).toUpperCase() + value.slice(1);
      fetchMeals(formattedValue);
    }
  }, [value]);

  const meals = data?.meals || [];
  const displayName = value?.replace(/-/g, " ");

  return (
    <div
      className="min-h-screen py-16 px-4"
      style={{ backgroundColor: "#faf7f2" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Back link */}
        <Link
          href={backLink}
          className="inline-flex items-center gap-2 text-sm font-semibold mb-10 transition-colors hover:opacity-70"
          style={{ color: "#7a5c44" }}
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Dashboard
        </Link>

        {/* Header */}
        <div className="mb-14">
          <span
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full mb-5"
            style={{
              backgroundColor: "#fff3e0",
              color: "#c0392b",
              border: "1px solid #f5c6a0",
            }}
          >
            <Utensils className="w-3 h-3" />
            {type === "cuisine" ? "Global Cuisines" : "Browse by Category"}
          </span>

          <h1
            className="text-4xl md:text-6xl font-black mb-4 leading-tight tracking-tight capitalize"
            style={{ color: "#1a0a00" }}
          >
            {displayName}{" "}
            <span
              className="italic"
              style={{
                background: "linear-gradient(90deg, #c0392b, #e67e22)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {type === "cuisine" ? "Cuisine" : "Recipes"}
            </span>
          </h1>

          {!loading && meals.length > 0 && (
            <p className="text-lg font-light" style={{ color: "#7a5c44" }}>
              {meals.length} delicious {displayName}{" "}
              {type === "cuisine" ? "dishes" : "recipes"} to explore
            </p>
          )}
        </div>

        {/* Divider */}
        <div
          className="h-px mb-12"
          style={{
            background: "linear-gradient(to right, #c0392b, transparent)",
          }}
        />

        {/* Loading */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-28">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5"
              style={{
                backgroundColor: "#fff3e0",
                border: "1px solid #f5c6a0",
              }}
            >
              <Loader2
                className="w-8 h-8 animate-spin"
                style={{ color: "#c0392b" }}
              />
            </div>
            <p className="font-semibold" style={{ color: "#7a5c44" }}>
              Loading recipes…
            </p>
          </div>
        )}

        {/* Grid */}
        {!loading && meals.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
            {meals.map((meal) => (
              <RecipeCard key={meal.idMeal} recipe={meal} variant="grid" />
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && meals.length === 0 && (
          <div
            className="rounded-3xl p-14 text-center"
            style={{
              backgroundColor: "#1a0a00",
              border: "1px solid #2e1200",
              boxShadow: "0 8px 40px rgba(192,57,43,0.12)",
            }}
          >
            <div className="text-5xl mb-5">🍽️</div>
            <h3 className="text-2xl font-black mb-3" style={{ color: "#fff" }}>
              Nothing here yet.
            </h3>
            <p className="font-light mb-8" style={{ color: "#a87d5e" }}>
              We couldn&apos;t find any {displayName}{" "}
              {type === "cuisine" ? "dishes" : "recipes"}.
            </p>
            <Link href={backLink}>
              <button
                className="inline-flex items-center gap-2 text-sm font-bold px-5 py-3 rounded-xl transition-opacity hover:opacity-90"
                style={{
                  background: "linear-gradient(135deg, #c0392b, #e67e22)",
                  color: "#fff",
                  boxShadow: "0 4px 20px rgba(192,57,43,0.4)",
                }}
              >
                <ArrowLeft className="w-4 h-4" />
                Back to exploring
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
