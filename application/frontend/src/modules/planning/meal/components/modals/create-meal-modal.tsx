import { DAY_LABELS, MEAL_LABELS } from '#/modules/planning/meal/constants';
import { MealType, Recipe } from '#/shared';
import CreateButton from '#/components/buttons/simple-buttons/create-button';
import IconChecked from '#/components/icons/icon-checked';
import IconForward from '#/components/icons/icon-forward';
import ListRecipesForm from '#/modules/cooking/recipe/components/forms/list-recipes-form';
import { MealsQueryKey } from '#/modules/planning/meal/queries';
import Modal from '#/components/modals/modal';
import SmallRecipeCard from '#/modules/cooking/recipe/components/cards/small-recipe-card';
import SubmitButton from '#/components/buttons/simple-buttons/submit-button';
import Tag from '#/components/tag';
import { createDateHavingDaysOffset } from '#/modules/planning/meal/utils';
import { getItemById } from '#/utils/array';
import { useCreateMealMutation } from '#/modules/planning/meal/mutations';
import useDebouncedValue from '#/hooks/use-debounced-value';
import { useQueryClient } from '@tanstack/react-query';
import { useRecipes } from '#/modules/cooking/recipe/queries';
import { useEffect, useState } from 'react';
import GlobalLoadingOverlay from '#/components/overlays/global-loading-overlay';
import MealRecipeEmptyState from '#/modules/planning/meal/components/meal-recipe-empty-state';
import { useUserHouse } from '#/modules/user/house/queries';
import LabeledNumberInput from '#/components/inputs/labeled-number-input';
import { uuidv4 } from '#/shared';
import DefaultButton from '#/components/buttons/simple-buttons/default-button';
import { logError } from '#/utils/error';

interface CreateMealModalProps {
  initialMealDate: Date;
  initialMealType: MealType;
  isOpen: boolean;
  onCancel: () => unknown;
}

export default function CreateMealModal({ initialMealDate, initialMealType, isOpen, onCancel }: CreateMealModalProps) {
  const queryClient = useQueryClient();
  const house = useUserHouse();
  const [mealDate, setMealDate] = useState(initialMealDate);
  const [mealType, setMealType] = useState(initialMealType);
  const [recipeId, setRecipeId] = useState<null | string>(null);
  const [nbPortions, setNbPortions] = useState(2);

  useEffect(() => {
    if (house !== undefined) {
      setNbPortions(house.defaultNbPortions);
    }
  }, [house]);

  const closeModal = async () => {
    if (!isOpen) {
      return;
    }

    await queryClient.invalidateQueries({
      queryKey: [MealsQueryKey.List],
    });
    setRecipeId(null);
    setMealDate(initialMealDate);
    setMealType(initialMealType);
    setNbPortions(2);
    onCancel();
  };
  const closeModalAsync = () => {
    closeModal().catch(logError);
  };
  const handleRecipeClick = (clickedRecipeId: string) => {
    if (recipeId === clickedRecipeId) {
      setRecipeId(null);

      return;
    }

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

  const mutation = useCreateMealMutation();
  const createMeal = (shouldCloseModal: boolean) => {
    const inputs = {
      id: uuidv4(),
      date: mealDate,
      mealType: mealType,
      recipeId: recipeId!,
      nbPortions: nbPortions,
    };

    mutation.mutate(inputs, {
      onSuccess: () => {
        if (shouldCloseModal) {
          closeModalAsync();

          return;
        }

        setRecipeId(null);
        if (mealType === 'lunch') {
          setMealType('dinner');

          return;
        }

        if (mealType === 'dinner') {
          setMealDate(createDateHavingDaysOffset(mealDate, 1));
          setMealType('lunch');
        }
      },
    });
  };
  const createMealAndCloseModal = () => createMeal(true);
  const createMealAndContinue = () => createMeal(false);

  return (
    <>
      {mutation.isPending && <GlobalLoadingOverlay />}
      <Modal
        isOpen={isOpen}
        onCancel={closeModal}
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

              tablet:px-4
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
                    text={`${DAY_LABELS[mealDate.getDay()]} ${MEAL_LABELS[mealType]}`}
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
                      text={(getItemById(recipes, recipeId)?.name ?? '').substring(0, 30)}
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
            <div
              className={`
                flex
                items-center
              `}
            >
              <div
                className={`
                  mr-2
                  h-10
                `}
                data-tooltip-id="global"
                data-tooltip-content={
                  recipeId === null ? 'Veuillez choisir une recette' : 'Valider et définir le repas suivant'
                }
              >
                <SubmitButton
                  onClick={createMealAndContinue}
                  isDisabled={recipeId === null}
                  className="h-10"
                >
                  <IconForward />
                </SubmitButton>
              </div>
              <div
                className="h-10"
                data-tooltip-id="global"
                data-tooltip-content={recipeId === null ? 'Fermer' : 'Valider et fermer'}
              >
                {recipeId === null && (
                  <DefaultButton
                    onClick={closeModalAsync}
                    className="h-10"
                  >
                    <IconChecked />
                  </DefaultButton>
                )}
                {recipeId !== null && (
                  <CreateButton
                    onClick={createMealAndCloseModal}
                    className="h-10"
                  >
                    <IconChecked />
                  </CreateButton>
                )}
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
