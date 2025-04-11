import Accordion from '#/components/accordion/accordion';
import { AccordionItemData } from '#/components/accordion/accordion-item';
import CreateActionButton from '#/components/buttons/action-buttons/create-action-button';
import IconDefaultEmptyState from '#/components/icons/icon-default-empty-state';
import BooleanInput from '#/components/inputs/boolean-input';
import NumberInput from '#/components/inputs/number-input';
import { useQueryParamState } from '#/hooks/use-query-param-state';
import useScaledRecipeIngredients from '#/modules/cooking/recipe-ingredient/hooks/use-scaled-recipe-ingredients';
import { useRecipeIngredients } from '#/modules/cooking/recipe-ingredient/queries';
import RecipeInstructions from '#/modules/cooking/recipe-instruction/components/recipe-instructions';
import TakePictureForm from '#/modules/cooking/recipe/components/forms/take-picture-form';
import RecipeBadges from '#/modules/cooking/recipe/components/recipe-badges';
import { DEFAULT_RECIPE_ILLUSTRATION_URL } from '#/modules/cooking/recipe/constants';
import IngredientsByCategories from '#/modules/shared/ingredient-category/components/ingredients-by-categories';
import QuantifiedIngredientLabel from '#/modules/shared/ingredient/components/quantified-ingredient-label';
import { QuantifiedIngredient, Recipe } from '#/shared';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SHOW_RECIPE_PART_QUERY_KEY = 'section';

interface ShowRecipeDetailsProps {
  recipe: Recipe;
  userHouseId: string | undefined;
  defaultNbPortions: number;
}

export default function ShowRecipeDetails({ recipe, userHouseId, defaultNbPortions = 2 }: ShowRecipeDetailsProps) {
  const isUserRecipe = recipe.houseId === userHouseId;
  const [activeSection, setActiveSection] = useQueryParamState(SHOW_RECIPE_PART_QUERY_KEY);
  const [nbPortions, setNbPortions] = useState(defaultNbPortions);
  const handleNbPortionsInputClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveSection('ingredients');
  };

  const [shouldRoundQuantity, setShouldRoundQuantity] = useState(true);
  const scaledRecipeIngredients = useScaledRecipeIngredients(
    useRecipeIngredients(recipe.id) ?? [],
    recipe.nbPortions,
    nbPortions,
  );

  useEffect(
    () => {
      if (activeSection === '') {
        setActiveSection('instructions');
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const navigate = useNavigate();
  const redirectToEditRecipeIngredients = () => navigate(`/app/recipes/${recipe.id}/edit?step=ingredients`);

  const readOnlyIngredientComponentFactory = (quantifiedIngredient: QuantifiedIngredient) => {
    return (
      <div className="flex">
        <span
          className={`
            mr-2
            mt-[7px]
            h-1
            rounded-full
            bg-sky-500
            p-1
          `}
        />
        <QuantifiedIngredientLabel
          shouldRoundQuantity={shouldRoundQuantity}
          quantifiedIngredient={quantifiedIngredient}
        />
      </div>
    );
  };

  const ingredientsAccordionItem: AccordionItemData = {
    id: 'ingredients',
    color: 'sky',
    headerFactory: () => (
      <div className="flex w-full justify-between gap-4 p-2 font-title text-2xl">
        Ingrédients
        <div
          className="flex gap-4"
          onClick={handleNbPortionsInputClick}
        >
          <span className="hidden tablet:inline">Pour</span>
          <NumberInput
            size="small"
            min={1}
            value={nbPortions}
            onChange={setNbPortions}
          />
          <span className="hidden tablet:inline">personnes</span>
        </div>
      </div>
    ),
    children: (
      <>
        {scaledRecipeIngredients.length === 0 && (
          <div className="flex flex-col items-center justify-center gap-4 px-8 pb-8">
            <div className="text-sky-400">
              <IconDefaultEmptyState />
            </div>
            {isUserRecipe && (
              <CreateActionButton
                onClick={redirectToEditRecipeIngredients}
                icon="plus"
                label="Ajouter les ingrédients"
              />
            )}
          </div>
        )}
        {scaledRecipeIngredients.length > 0 && (
          <div className="rounded bg-white p-4">
            <div className="flex justify-between itemx-center">
              <p className="hidden tablet:block text-sky-700 text-lg tablet:text-xl">Vous aurez besoin de&nbsp;:</p>
              <BooleanInput
                value={shouldRoundQuantity}
                onChange={setShouldRoundQuantity}
                className="w-min"
              >
                <p>Arrondir les quantités</p>
              </BooleanInput>
            </div>
            <div className="mt-4 grid gap-4 laptop:grid-cols-3">
              <IngredientsByCategories
                quantifiedIngredients={scaledRecipeIngredients}
                ingredientComponentFactory={readOnlyIngredientComponentFactory}
              />
            </div>
          </div>
        )}
      </>
    ),
  };

  const instructionsAccordionItem: AccordionItemData = {
    id: 'instructions',
    color: 'orange',
    headerFactory: () => (
      <div className="flex w-full justify-between p-2 font-title text-2xl">
        Instructions
        <div className="flex items-center gap-2">
          <img
            width="28"
            src="/icons/cooking.png"
            className="rounded-full bg-white p-1"
          />
          {`${recipe.totalTimeInMinutes} mins`}
        </div>
      </div>
    ),
    children: (
      <RecipeInstructions
        recipe={recipe}
        userHouseId={userHouseId}
      />
    ),
  };

  return (
    <>
      <div
        className={`
          mb-4
          mt-4
          flex
          flex-col
          flex-wrap
          items-center
          justify-center
          gap-4

          tablet:flex-row
        `}
      >
        <div
          className={`
            w-full
            flex-none

            tablet:w-60
          `}
        >
          <img
            src={recipe.illustrationUrl ?? DEFAULT_RECIPE_ILLUSTRATION_URL}
            alt={recipe.name}
            className={`
              mx-auto
              w-full
              overflow-hidden
              rounded-md
            `}
          />
          {recipe.illustrationUrl === null && isUserRecipe && (
            <TakePictureForm
              recipe={recipe}
              className={`
                mt-2
                w-full
              `}
            />
          )}
        </div>
        <div
          className={`
            flex
            w-full
            flex-1
            flex-col
            justify-around
            rounded
            bg-slate-50
            px-6
            py-8

            laptop:ml-4
          `}
        >
          <h3
            className={`
              mb-4
              text-xl
              text-slate-700
            `}
          >
            {recipe.name}
          </h3>

          <div
            className={`
              flex
              flex-wrap
              justify-between
            `}
          >
            <div className="text-slate-700">
              <p className="mb-4">
                <img
                  className={`
                    mr-2
                    inline
                    align-bottom
                  `}
                  height="30"
                  width="30"
                  src="/icons/preparing.png"
                  alt="Durée de préparation"
                />
                {`Préparation : ${recipe.preparationTimeInMinutes} minutes`}
              </p>
              <p>
                <img
                  className={`
                    mr-2
                    inline
                    align-bottom
                  `}
                  height="30"
                  width="30"
                  src="/icons/cooking.png"
                  alt="Durée totale"
                />
                {`Durée totale : ${recipe.totalTimeInMinutes} minutes`}
              </p>
            </div>
            <div className="mt-6">
              <RecipeBadges
                size="large"
                recipe={recipe}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mb-4">
        <Accordion
          items={[ingredientsAccordionItem]}
          queryStringKey={SHOW_RECIPE_PART_QUERY_KEY}
        />
      </div>
      <Accordion
        items={[instructionsAccordionItem]}
        queryStringKey={SHOW_RECIPE_PART_QUERY_KEY}
      />
    </>
  );
}
