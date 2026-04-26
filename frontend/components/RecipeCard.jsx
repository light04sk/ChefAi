"use client";

import { getRecipeData } from "@/components/recipe-page/recipe-card/getRecipeData";
import GridCard from "@/components/recipe-page/recipe-card/GridCard";
import PantryCard from "@/components/recipe-page/recipe-card/PantryCard";
import ListCard from "@/components/recipe-page/recipe-card/ListCard";
import DefaultCard from "@/components/recipe-page/recipe-card/DefaultCard";

export default function RecipeCard({ recipe, variant = "default" }) {
  const data = getRecipeData(recipe);

  if (variant === "grid") return <GridCard data={data} />;
  if (variant === "pantry") return <PantryCard data={data} />;
  if (variant === "list") return <ListCard data={data} />;
  return <DefaultCard data={data} />;
}
