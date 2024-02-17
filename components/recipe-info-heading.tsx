import { Young_Serif } from "next/font/google";

const young_serif = Young_Serif({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
});

export default function RecipeInfoHeading({ text }: RecipeInfoHeadingProps) {
  return (
    <h2 className={`text-2xl text-orange-700 ${young_serif.className}`}>
      {text}
    </h2>
  );
}
