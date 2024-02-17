export default function RecipeInfoList({ data }: RecipeInfoListProps) {
  return (
    <ul className="p-2 space-y-2 list-disc">
      {data.map((value) => (
        <li key={value}>{value}</li>
      ))}
    </ul>
  );
}
