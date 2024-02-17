import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Young_Serif } from "next/font/google";

import { getRecipeDetails } from "@/lib/helper";
import { fetchRecipes } from "@/data/data";
import RecipeInfoHeading from "@/components/recipe-info-heading";
import RecipeInfoList from "@/components/recipe-info-list";
import LikeButton from "@/components/like-button";

interface PageParams {
  params: { slug: string };
}

const young_serif = Young_Serif({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
});

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const slug = params.slug;

  return {
    title: decodeURI(slug),
  };
}
export default async function Page({ params }: PageParams) {
  const recipe = decodeURI(params.slug);
  const allRecipes = await fetchRecipes();
  const recipeDetails = getRecipeDetails(recipe, allRecipes);

  if (!recipe || !recipeDetails) {
    notFound();
  }

  const {
    image,
    name,
    cookTimeMinutes,
    prepTimeMinutes,
    ingredients,
    instructions,
    difficulty,
  } = recipeDetails;

  return (
    <section className="space-y-6 px-2">
      <Image
        src={image}
        alt={name}
        width={500}
        height={0}
        className="w-full h-[200px] object-cover"
        priority
      />
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1
            className={`${young_serif.className} text-2xl md:text-4xl text-orange-900`}
          >
            {name}
          </h1>
          <LikeButton />
        </div>
        <p>
          <span className="font-semibold text-orange-700">Difficulty</span>:{" "}
          {difficulty}
        </p>
      </div>
      <div className="bg-orange-50 p-5 rounded-md space-y-3">
        <h2 className={`text-xl text-orange-700 ${young_serif.className}`}>
          Preparation Time
        </h2>
        <ul className="p-2 space-y-2 list-disc">
          <li>
            <span className="font-semibold">Cook Time</span>:&nbsp;
            {cookTimeMinutes}
            &nbsp;minutes
          </li>
          <li>
            <span className="font-semibold">Prep Time</span>:&nbsp;
            {prepTimeMinutes}
            &nbsp;minutes
          </li>
        </ul>
      </div>
      <div className="space-y-3">
        <RecipeInfoHeading text="Ingredients" />
        <RecipeInfoList data={ingredients} />
      </div>
      <div className="space-y-3">
        <RecipeInfoHeading text="Instructions" />
        <RecipeInfoList data={instructions} />
      </div>
    </section>
  );
}
