import { ReactNode } from 'react';
import { Recipe } from '@lemonpie/shared';
import RecipeCard from '@/components/RecipeCard';
import fetchApi from '@/utils/fetch-api';

interface RecipesLayoutProps {
  children: ReactNode;
}

export default async function Layout(props: RecipesLayoutProps) {
  const recipes = await fetchApi<Recipe[]>('GET', '/api/recipes');
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