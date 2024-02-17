import Image from "next/image";
import Link from "next/link";

export default function RecipeCard({ recipe }: RecipeCardProps) {
  const { image, name, tags } = recipe;

  return (
    <Link
      href={`/recipe/${name}`}
      className="cursor-pointer border border-slate-200 shadow-sm"
    >
      <Image
        src={image}
        alt={name}
        width={500}
        height={0}
        className="w-[500px] h-[200px] object-cover"
        priority
      />
      <div className="p-4 space-y-5">
        <p className="text-lg font-semibold">{name}</p>
        <ul className="flex flex-wrap items-center gap-2">
          {tags.map((tag) => (
            <li
              key={tag}
              className="bg-orange-200 px-4 py-1 rounded-full text-sm"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
}
