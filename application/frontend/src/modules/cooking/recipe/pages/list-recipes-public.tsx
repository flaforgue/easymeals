import useDebouncedValue from '#/hooks/use-debounced-value';
import { useState } from 'react';
import { usePublicRecipes } from '#/modules/cooking/recipe/queries';
import ListRecipeCards from '#/modules/cooking/recipe/templates/list-recipe-cards';
import ListRecipesFormPublic from '#/modules/cooking/recipe/components/forms/list-recipes-form-public';
import RecipeEmptyStatePublic from '#/modules/cooking/recipe/components/empty-states/recipe-empty-state-public';

export default function ListRecipesPublic() {
  const [search, setSearch] = useState('');
  const [cuisineTypeId, setCuisineTypeId] = useState<null | string>(null);
  const [isVegetarian, setIsVegetarian] = useState(false);
  const [isFast, setIsFast] = useState(false);

  const debouncedSearch = useDebouncedValue(search, 500);
  const { recipes, isLoading } = usePublicRecipes({
    search: debouncedSearch,
    cuisineTypeId: cuisineTypeId,
    isVegetarian: isVegetarian,
    isFast: isFast,
  });

  const isPageEmpty = recipes.length === 0 && !isLoading;

  return (
    <section
      className={`
        min-w-screen
        mb-16
      `}
    >
      <div
        className={`
          mb-4
          flex
          justify-between
          gap-2
        `}
      >
        <ListRecipesFormPublic
          search={search}
          cuisineTypeId={cuisineTypeId}
          isVegetarian={isVegetarian}
          isFast={isFast}
          setSearch={setSearch}
          setCuisineTypeId={setCuisineTypeId}
          setIsVegetarian={setIsVegetarian}
          setIsFast={setIsFast}
        />
      </div>

      <ListRecipeCards
        recipes={recipes}
        isLoading={isLoading}
      />

      {isPageEmpty && <RecipeEmptyStatePublic />}
    </section>
  );
}
