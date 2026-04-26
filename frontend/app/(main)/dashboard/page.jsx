import {
  getRecipeOfTheDay,
  getCategories,
  getAreas,
} from "@/actions/mealdb.actions";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import FeaturedRecipe from "@/components/dashboard/FeaturedRecipe";
import CategoryGrid from "@/components/dashboard/CategoryGrid";
import CuisineGrid from "@/components/dashboard/CuisineGrid";

export default async function DashboardPage() {
  const [recipeData, categoriesData, areasData] = await Promise.all([
    getRecipeOfTheDay(),
    getCategories(),
    getAreas(),
  ]);

  const recipeOfTheDay = recipeData?.recipe;
  const categories = categoriesData?.categories || [];
  const areas = areasData?.areas || [];

  return (
    <div
      className="min-h-screen py-16 px-4"
      style={{ backgroundColor: "#faf7f2" }}
    >
      <div className="max-w-6xl mx-auto">
        <DashboardHeader />
        {recipeOfTheDay && <FeaturedRecipe recipe={recipeOfTheDay} />}
        <CategoryGrid categories={categories} />
        <CuisineGrid areas={areas} />
      </div>
    </div>
  );
}
