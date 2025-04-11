import MainContentLoadingOverlay from '#/components/overlays/maint-content-loading-overlay';
import RecipeCard from '#/modules/cooking/recipe/components/cards/recipe-card';
import { Recipe } from '#/shared';

interface ListRecipeCardsProps {
  recipes: Recipe[];
  isLoading: boolean;
}
export default function ListRecipeCards({ recipes, isLoading }: ListRecipeCardsProps) {
  const recipesList = recipes.map((recipe: Recipe) => (
    <RecipeCard
      key={recipe.id}
      recipe={recipe}
    />
  ));

  return (
    <section
      className={`
        grid
        gap-3

        2xl:grid-cols-4

        tablet:grid-cols-2

        laptop:grid-cols-3
      `}
    >
      {isLoading && <MainContentLoadingOverlay />}
      {recipesList}
    </section>
  );
}
