export function getRecipeData(recipe) {
  if (recipe.strMeal) {
    return {
      title: recipe.strMeal,
      image: recipe.strMealThumb,
      href: `/recipe?cook=${encodeURIComponent(recipe.strMeal)}`,
      showImage: true,
    };
  }
  if (recipe.matchPercentage) {
    return {
      title: recipe.title,
      description: recipe.description,
      category: recipe.category,
      cuisine: recipe.cuisine,
      prepTime: recipe.prepTime,
      cookTime: recipe.cookTime,
      servings: recipe.servings,
      matchPercentage: recipe.matchPercentage,
      missingIngredients: recipe.missingIngredients || [],
      href: `/recipe?cook=${encodeURIComponent(recipe.title)}`,
    };
  }
  return {
    title: recipe.title,
    description: recipe.description,
    category: recipe.category,
    cuisine: recipe.cuisine,
    prepTime: recipe.prepTime,
    cookTime: recipe.cookTime,
    servings: recipe.servings,
    image: recipe.imageUrl,
    href: `/recipe?cook=${encodeURIComponent(recipe.title)}`,
    showImage: !!recipe.imageUrl,
  };
}
