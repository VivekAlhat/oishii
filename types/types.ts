interface Recipe {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string[];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  difficulty: string;
  cuisine: string;
  caloriesPerServing: number;
  tags: string[];
  userId: number;
  image: string;
  rating: number;
  reviewCount: number;
  mealType: string[];
}

type RecipeResponse = {
  recipes: Recipe[];
};

type RecipeCardProps = {
  recipe: Recipe;
};

type RecipeInfoHeadingProps = {
  text: string;
};

type RecipeInfoListProps = {
  data: string[];
};
