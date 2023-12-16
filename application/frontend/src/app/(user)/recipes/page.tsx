import Image from 'next/image';
import { Recipe } from '@lemonpie/shared';
import { getAccessToken } from '@auth0/nextjs-auth0';

export const dynamic = 'force-dynamic';
export default async function Recipes() {
  async function getRecipes(): Promise<Recipe[]> {
    const { accessToken } = await getAccessToken();
    const res = await fetch('http://backend:3000/recipes', {
      cache: 'no-store',
      method: 'GET',
      headers : {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        Accept: 'application/json',
        // eslint-disable-next-line @typescript-eslint/naming-convention
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!res.ok) {
      throw new Error(
        `Failed to fetch in ${getRecipes.name} (received ${res.status} ${res.statusText})`,
      );
    }

    return res.json() as Promise<Recipe[]>;
  }

  const recipes = await getRecipes();
  const recipesList = recipes.map(
    (recipe: Recipe) => (
      <div key={recipe.id}>
        <p>{recipe.name}</p>
        {
          recipe.imageUrl !== null &&
          <Image src={recipe.imageUrl} width={100} height={100} alt={recipe.name} />
        }
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
