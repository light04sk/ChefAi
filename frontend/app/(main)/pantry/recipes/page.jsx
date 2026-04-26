"use client";

import { useEffect } from "react";
import { ArrowLeft, RefreshCw } from "lucide-react";
import Link from "next/link";
import useFetch from "@/hooks/use-fetch";
import { getRecipesByPantryIngredients } from "@/actions/recipe.actions";
import RecipeCard from "@/components/RecipeCard";
import PantryRecipesHeader from "@/components/pantry-recipes/PantryRecipesHeader";
import PantryRecipesIngredientsStrip from "@/components/pantry-recipes/PantryRecipesIngredientsStrip";
import PantryRecipesLoading from "@/components/pantry-recipes/PantryRecipesLoading";
import PantryRecipesEmptyState from "@/components/pantry-recipes/PantryRecipesEmptyState";
import PantryRecipesRateLimit from "@/components/pantry-recipes/PantryRecipesRateLimit";

export default function PantryRecipesPage() {
  const {
    loading,
    data: recipesData,
    fn: fetchSuggestions,
  } = useFetch(getRecipesByPantryIngredients);

  useEffect(() => {
    fetchSuggestions();
  }, []);

  const recipes = recipesData?.recipes || [];
  const ingredientsUsed = recipesData?.ingredientsUsed || "";

  return (
    <div
      className="min-h-screen pb-20 px-4"
      style={{ backgroundColor: "#faf7f2" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Back link */}
        <div className="pt-12 pb-5">
          <Link
            href="/pantry"
            className="inline-flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-70"
            style={{ color: "#7a5c44" }}
          >
            <ArrowLeft className="w-4 h-4" /> Back to Pantry
          </Link>
        </div>

        <PantryRecipesHeader
          recommendationsLimit={recipesData?.recommendationsLimit}
        />

        <div
          className="h-px mb-8"
          style={{
            background: "linear-gradient(to right, #c0392b, transparent)",
          }}
        />

        <PantryRecipesIngredientsStrip ingredientsUsed={ingredientsUsed} />

        {loading && <PantryRecipesLoading />}

        {!loading && recipes.length > 0 && (
          <div>
            <div className="flex items-center justify-between mb-7">
              <div>
                <p
                  className="text-xs uppercase tracking-widest mb-1 font-semibold"
                  style={{ color: "#e67e22" }}
                >
                  ✦ Matched for you
                </p>
                <h2
                  className="text-2xl md:text-3xl font-black"
                  style={{ color: "#1a0a00" }}
                >
                  Recipe Suggestions
                </h2>
              </div>
              <span
                className="text-xs font-bold px-3 py-1.5 rounded-full"
                style={{
                  backgroundColor: "#fff3e0",
                  color: "#c0392b",
                  border: "1px solid #f5c6a0",
                }}
              >
                {recipes.length} {recipes.length === 1 ? "recipe" : "recipes"}
              </span>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {recipes.map((recipe, index) => (
                <RecipeCard key={index} recipe={recipe} variant="pantry" />
              ))}
            </div>

            <div className="mt-10 text-center">
              <button
                onClick={() => fetchSuggestions(new FormData())}
                disabled={loading}
                className="inline-flex items-center gap-2 text-sm font-bold px-6 py-3 rounded-xl transition-opacity hover:opacity-90 disabled:opacity-50"
                style={{
                  backgroundColor: "#fff",
                  color: "#1a0a00",
                  border: "1px solid #ede0d4",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
                }}
              >
                <RefreshCw className="w-4 h-4" style={{ color: "#c0392b" }} />
                Get New Suggestions
              </button>
            </div>
          </div>
        )}

        {!loading && recipes.length === 0 && recipesData?.success === false && (
          <PantryRecipesEmptyState />
        )}

        {!loading && recipesData === undefined && <PantryRecipesRateLimit />}
      </div>
    </div>
  );
}
