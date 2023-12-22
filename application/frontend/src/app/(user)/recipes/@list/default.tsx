import { Recipe } from '@lemonpie/shared';
import RecipeCard from '@/components/RecipeCard';
import fetchApi from '@/utils/fetch-api';

export default async function Page() {
  const recipes = await fetchApi<Recipe[]>('GET', '/api/recipes');
  const recipesList = recipes.map(
    (recipe: Recipe) => <RecipeCard key={recipe.id} recipe={recipe} />,
  );

  return (
    <section className="grid grid-cols-3 gap-3">
      {recipesList}
    </section>
  );
}