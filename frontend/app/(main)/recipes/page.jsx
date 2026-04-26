"use client";

import { useEffect } from "react";
import {
  BookMarked,
  Loader2,
  ChefHat,
  Compass,
  UtensilsCrossed,
} from "lucide-react";
import Link from "next/link";
import useFetch from "@/hooks/use-fetch";
import { getSavedRecipes } from "@/actions/recipe.actions";
import RecipeCard from "@/components/RecipeCard";

export default function SavedRecipesPage() {
  const {
    loading,
    data: recipesData,
    fn: fetchSavedRecipes,
  } = useFetch(getSavedRecipes);

  useEffect(() => {
    fetchSavedRecipes();
  }, []);

  const recipes = recipesData?.recipes || [];

  return (
    <div
      className="min-h-screen py-16 px-4"
      style={{ backgroundColor: "#faf7f2" }}
    >
      <div className="max-w-6xl mx-auto">
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
            <BookMarked className="w-3 h-3" />
            Your personal cookbook
          </span>

          <h1
            className="text-4xl md:text-6xl font-black mb-4 leading-tight tracking-tight"
            style={{ color: "#1a0a00" }}
          >
            Recipes you&apos;ve{" "}
            <span
              className="italic"
              style={{
                background: "linear-gradient(90deg, #c0392b, #e67e22)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              fallen for.
            </span>
          </h1>

          <p
            className="text-lg max-w-2xl font-light"
            style={{ color: "#7a5c44" }}
          >
            Everything you&apos;ve bookmarked — ready to cook whenever the
            craving hits.
          </p>
        </div>

        {/* Divider */}
        <div
          className="h-px mb-10"
          style={{
            background: "linear-gradient(to right, #c0392b, transparent)",
          }}
        />

        {/* Loading State */}
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
              Fetching your saved dishes…
            </p>
          </div>
        )}

        {/* Recipes Grid */}
        {!loading && recipes.length > 0 && (
          <>
            <div className="flex items-center justify-between mb-8">
              <p className="text-sm font-semibold" style={{ color: "#7a5c44" }}>
                {recipes.length} {recipes.length === 1 ? "recipe" : "recipes"}{" "}
                saved
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {recipes.map((recipe) => (
                <RecipeCard
                  key={recipe.documentId}
                  recipe={recipe}
                  variant="list"
                />
              ))}
            </div>
          </>
        )}

        {/* Empty State */}
        {!loading && recipes.length === 0 && (
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
              <UtensilsCrossed
                className="w-10 h-10"
                style={{ color: "#e67e22" }}
              />
            </div>

            <h3 className="text-2xl font-black mb-3" style={{ color: "#fff" }}>
              Nothing saved yet.
            </h3>
            <p
              className="mb-8 max-w-sm mx-auto font-light"
              style={{ color: "#a87d5e" }}
            >
              Start exploring recipes from around the world and bookmark the
              ones worth cooking again.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/dashboard">
                <button
                  className="flex items-center gap-2 text-sm font-bold px-5 py-3 rounded-xl transition-opacity hover:opacity-90"
                  style={{
                    background: "linear-gradient(135deg, #c0392b, #e67e22)",
                    color: "#fff",
                    boxShadow: "0 4px 20px rgba(192,57,43,0.4)",
                  }}
                >
                  <Compass className="w-4 h-4" />
                  Explore Recipes
                </button>
              </Link>
              <Link href="/pantry">
                <button
                  className="flex items-center gap-2 text-sm font-bold px-5 py-3 rounded-xl transition-colors hover:bg-white/10"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.07)",
                    color: "#c9a87c",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <ChefHat className="w-4 h-4" />
                  Cook from Pantry
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
