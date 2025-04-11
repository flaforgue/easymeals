import { DAY_LABELS, MEAL_LABELS } from '#/modules/planning/meal/constants';
import { Meal, Recipe } from '#/shared';
import ListRecipesForm from '#/modules/cooking/recipe/components/forms/list-recipes-form';
import GlobalLoadingOverlay from '#/components/overlays/global-loading-overlay';
import Modal from '#/components/modals/modal';
import SmallRecipeCard from '#/modules/cooking/recipe/components/cards/small-recipe-card';
import SubmitButton from '#/components/buttons/simple-buttons/submit-button';
import Tag from '#/components/tag';
import { getItemById } from '#/utils/array';
import useDebouncedValue from '#/hooks/use-debounced-value';
import { useRecipes } from '#/modules/cooking/recipe/queries';
import { useState } from 'react';
import { useUpdateMealMutation } from '#/modules/planning/meal/mutations';
import MealRecipeEmptyState from '#/modules/planning/meal/components/meal-recipe-empty-state';
import LabeledNumberInput from '#/components/inputs/labeled-number-input';

interface EditMealModalProps {
  meal: Meal;
  isOpen: boolean;
  onCancel: () => unknown;
}

export default function EditMealModal({ meal, isOpen, onCancel }: EditMealModalProps) {
  const [nbPortions, setNbPortions] = useState(meal.nbPortions);
  const [recipeId, setRecipeId] = useState(meal.recipe.id);
  const handleRecipeClick = (clickedRecipeId: string) => {
    setRecipeId(clickedRecipeId);
  };

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
  const recipesList = recipes.map((recipe: Recipe) => (
    <SmallRecipeCard
      key={recipe.id}
      recipe={recipe}
      handleClick={() => handleRecipeClick(recipe.id)}
      isActive={recipeId === recipe.id}
    />
  ));

  const mutation = useUpdateMealMutation();
  const updateMeal = () => {
    const inputs = {
      id: meal.id,
      recipeId: recipeId,
      nbPortions: nbPortions,
    };

    mutation.mutate(inputs, {
      onSuccess: onCancel,
    });
  };

  return (
    <>
      {mutation.isPending && <GlobalLoadingOverlay />}
      <Modal
        isOpen={isOpen}
        onCancel={onCancel}
        size="largest"
      >
        <div className="tablet:px-4">
          <div
            className={`
              mb-4
              mt-8

              tablet:mt-0
              tablet:px-4
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
          <div
            className={`
              mb-4
              h-[calc(100vh-26rem)]
              overflow-scroll

              tablet:h-[calc(100vh-11rem)]
              tablet:px-4
            `}
          >
            {recipesList.length === 0 && !isLoading && <MealRecipeEmptyState />}
            <section
              className={`
                text-md
                mb-4
                grid
                grid-cols-2
                gap-2

                md:grid-cols-3

                laptop:grid-cols-4
              `}
            >
              {isLoading && <GlobalLoadingOverlay />}
              {recipesList}
            </section>
          </div>
          <div
            className={`
              flex
              items-center
              justify-between
            `}
          >
            <div>
              <div
                className={`
                  flex
                  flex-col
                  items-center
                  gap-4

                  tablet:flex-row
                  tablet:gap-0
                `}
              >
                <p className="block">
                  <span
                    className={`
                      hidden

                      tablet:inline
                    `}
                  >
                    Je choisis le plat de
                  </span>
                  <Tag
                    text={`${DAY_LABELS[new Date(meal.date).getDay()]} ${MEAL_LABELS[meal.mealType]}`}
                    className={`
                      mx-2
                      bg-sky-500
                      text-white
                    `}
                  />
                  <span
                    className={`
                      hidden

                      tablet:inline
                    `}
                  >
                    pour
                  </span>
                </p>
                <div className="tablet:mx-2">
                  <LabeledNumberInput
                    min={0}
                    value={nbPortions}
                    onChange={setNbPortions}
                    innerLabel="Pers."
                  />
                </div>
                <p
                  className={`
                    hidden

                    tablet:block
                  `}
                >
                  personnes :
                  {recipeId !== null && (
                    <Tag
                      text={getItemById(recipes, recipeId)?.name ?? ''}
                      className={`
                        mx-2
                        bg-green-500
                        text-white
                      `}
                    />
                  )}
                </p>
              </div>
            </div>
            <SubmitButton onClick={updateMeal}>Confirmer</SubmitButton>
          </div>
        </div>
      </Modal>
    </>
  );
}
