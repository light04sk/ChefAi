import React from "react";
import { Card, CardHeader, CardTitle } from "./ui/card";
import Link from "next/link";
import Image from "next/image";

const RecipeCard = ({ recipe, variant = "default" }) => {
  const getRecipeData = () => {
    if (recipe.strMeal) {
      return {
        title: recipe.strMeal,
        image: recipe.strMealThumb,
        href: `/recipe?cook=${encodeURIComponent(recipe.strMeal)}`,
        ShowImage: true,
      };
    }

    return {};
  };

  const data = getRecipeData();

  if (variant === "grid") {
    return (
      <Link href={data.href}>
        <Card className="rounded-none overflow-hidden border-stone-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group pt-0">
          {data.ShowImage ? (
            <div className="relative aspect-square">
              <Image
                src={data.image}
                alt={data.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white text-sm font-medium">
                    Click to view recipe
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div>nothing</div>
          )}

          <CardHeader>
            <CardTitle className="text-lg font-bold text-stone-900 group-hover:text-orange-600 transition-colors line-clamp-2">
              {data.title}
            </CardTitle>
          </CardHeader>
        </Card>
      </Link>
    );
  }
  return <></>;
};

export default RecipeCard;
