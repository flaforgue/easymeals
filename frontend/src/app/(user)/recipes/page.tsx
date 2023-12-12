import Image from 'next/image';

type Recipe = {
  id: number;
  name: string;
  imageUrl: string;
}

async function getRecipes(): Promise<Recipe[]> {
  const res = await fetch('http://backend:3000/recipes', {
    method: 'GET',
    headers : { 
      'Accept': 'application/json'
     }
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch in ${getRecipes.name}`);
  }
 
  return res.json();
}

export default async function Recipes() {
  const recipes = await getRecipes();
  const recipesList = recipes.map(
    (recipe) => (
      <div key={recipe.id}>
        <p>{recipe.name}</p>
        <Image src={recipe.imageUrl} width={100} height={100} alt={recipe.name} />
      </div>
    ),
  );


  return (
    <section>
      Recipes
      {recipesList}
    </section>
  );
}
