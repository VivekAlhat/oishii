const getRecipeDetails = (name: string, recipes: Recipe[]): Recipe => {
  const recipe = recipes.filter((r) => r.name === name);
  return recipe.at(0)!;
};

export { getRecipeDetails };
