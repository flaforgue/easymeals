'use client';

import { Recipe } from '@lemonpie/shared';
import RecipeCard from '@/components/RecipeCard';
import useRecipes from '@/hooks/use-recipes';

export default function Page() {
  const { recipes, fetchRecipes } = useRecipes();

  fetchRecipes();

  const recipesList = recipes.map(
    (recipe: Recipe) => <RecipeCard key={recipe.id} recipe={recipe} />,
  );


  return (
    <section className="grid grid-cols-3 gap-3">
      {recipesList}
    </section>
  );
}