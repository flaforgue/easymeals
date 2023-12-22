import { ReactNode } from 'react';
import { Recipe } from '@lemonpie/shared';
import RecipeCard from '@/components/RecipeCard';
import { getAccessToken } from '@auth0/nextjs-auth0';

interface RecipesLayoutProps {
  children: ReactNode;
}
export default async function Layout(props: RecipesLayoutProps) {
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
    (recipe: Recipe) => <RecipeCard key={recipe.id} recipe={recipe} />,
  );

  return (
    <>
      {props.children}
      <section className="grid grid-cols-3 gap-3">
        {recipesList}
      </section>
    </>
  );
}