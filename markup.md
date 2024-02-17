-- Home Page Start --

<section className="grid grid-cols-1 md:grid-cols-2 gap-12">
    {recipes.map((recipe) => (
    <RecipeCard key={recipe.id} recipe={recipe} />
    ))}
</section>

-- Home Page End --

-- Recipe Details Start --

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
    <   RecipeInfoList data={ingredients} />
    </div>
    <div className="space-y-3">
        <RecipeInfoHeading text="Instructions" />
        <RecipeInfoList data={instructions} />
    </div>
</section>

-- Recipe Details End --
