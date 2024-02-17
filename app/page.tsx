import RecipeCard from "@/components/recipe-card";
import { fetchRecipes } from "@/data/data";

export default async function Home() {
  const recipes = await fetchRecipes();

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </section>
  );
}
