import { API } from "@/lib/constants";

const fetchRecipes = async (): Promise<Recipe[]> => {
  const response = await fetch(`${API}/recipes`);
  const data: RecipeResponse = await response.json();
  return data.recipes;
};

export { fetchRecipes };
