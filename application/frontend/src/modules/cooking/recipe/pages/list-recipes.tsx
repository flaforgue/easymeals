import ListRecipesForm from '#/modules/cooking/recipe/components/forms/list-recipes-form';
import useDebouncedValue from '#/hooks/use-debounced-value';
import { useRecipes } from '#/modules/cooking/recipe/queries';
import { useState } from 'react';
import CreateRecipeButton from '#/modules/cooking/recipe/components/buttons/create-recipe-button';
import FloatingActionButtonContainer from '#/components/floating-action-button-container';
import RecipeEmptyState from '#/modules/cooking/recipe/components/empty-states/recipe-empty-state';
import ListRecipeCards from '#/modules/cooking/recipe/templates/list-recipe-cards';

export default function ListRecipes() {
  const [search, setSearch] = useState('');
  const [cuisineTypeId, setCuisineTypeId] = useState<null | string>(null);
  const [isVegetarian, setIsVegetarian] = useState(false);
  const [isFast, setIsFast] = useState(false);
  const [isUserContent, setIsUserContent] = useState(false);
  const [isBookmark, setIsBookmark] = useState(false);

  const debouncedSearch = useDebouncedValue(search, 500);
  const { recipes, isLoading } = useRecipes({
    search: debouncedSearch,
    cuisineTypeId: cuisineTypeId,
    isVegetarian: isVegetarian,
    isFast: isFast,
    isUserContent: isUserContent,
    isBookmark: isBookmark,
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
        <ListRecipesForm
          search={search}
          cuisineTypeId={cuisineTypeId}
          isVegetarian={isVegetarian}
          isFast={isFast}
          isUserContent={isUserContent}
          isBookmark={isBookmark}
          setSearch={setSearch}
          setCuisineTypeId={setCuisineTypeId}
          setIsVegetarian={setIsVegetarian}
          setIsFast={setIsFast}
          setIsUserContent={setIsUserContent}
          setIsBookmark={setIsBookmark}
        />
      </div>

      <ListRecipeCards
        recipes={recipes}
        isLoading={isLoading}
      />
      {isPageEmpty && <RecipeEmptyState />}

      <FloatingActionButtonContainer>
        <CreateRecipeButton />
      </FloatingActionButtonContainer>
    </section>
  );
}
