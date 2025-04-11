import Card from '#/components/cards/card';
import EditableQuantifiedIngredient from '#/modules/shared/ingredient/components/editable-quantified-ingredient';
import CreateRecipeIngredientForm from '#/modules/cooking/recipe-ingredient/components/forms/create-recipe-ingredient-form';
import {
  useDeleteRecipeIngredientMutation,
  useUpdateRecipeIngredientMutation,
} from '#/modules/cooking/recipe-ingredient/mutations';
import IngredientsByCategories from '#/modules/shared/ingredient-category/components/ingredients-by-categories';
import { useEffect, useState } from 'react';
import UnitHelpTable from '#/modules/shared/unit/components/unit-help-table';
import { QuantifiedIngredient, Recipe } from '#/shared';
import { useRecipeIngredients } from '#/modules/cooking/recipe-ingredient/queries';
import RecipeNbPortionsForm from '#/modules/cooking/recipe/components/forms/recipe-nb-portions-form';
import { recipeIngredientToQuantifiedIngredient } from '#/modules/cooking/recipe-ingredient/utils';
import LinedTitle from '#/components/lined-title';
import Tag from '#/components/tag';
import MainContentLoadingOverlay from '#/components/overlays/maint-content-loading-overlay';

interface EditRecipeIngredientsProps {
  recipe: Recipe;
}

export default function EditRecipeIngredients({ recipe }: EditRecipeIngredientsProps) {
  const recipeIngredients = useRecipeIngredients(recipe.id);
  const quantifiedIngredients = (recipeIngredients ?? []).map(recipeIngredientToQuantifiedIngredient);
  const [shouldShowNbPortionsForm, setShouldShowNbPortionsForm] = useState(false);
  const showNbPortionsForm = () => setShouldShowNbPortionsForm(true);
  const hideNbPortionsForm = () => setShouldShowNbPortionsForm(false);
  useEffect(() => {
    if (recipeIngredients === undefined) {
      return;
    }

    if (recipeIngredients.length === 0) {
      setShouldShowNbPortionsForm(true);
    }
  }, [recipeIngredients]);

  const deleteRecipeIngredientMutation = useDeleteRecipeIngredientMutation();
  const onIngredientDelete = (ingredientId: string) => {
    return deleteRecipeIngredientMutation.mutateAsync({
      ingredientId: ingredientId,
      recipeId: recipe.id,
    });
  };

  const updateRecipeIngredientMutation = useUpdateRecipeIngredientMutation();
  const onQuantityUpdate = (ingredientId: string, newQuantity: number) => {
    return updateRecipeIngredientMutation.mutate({
      recipeId: recipe.id,
      ingredientId: ingredientId,
      quantity: newQuantity,
    });
  };

  const editableIngredientComponentFactory = (quantifiedIngredient: QuantifiedIngredient) => {
    return (
      <div className="mt-2">
        <EditableQuantifiedIngredient
          quantifiedIngredient={quantifiedIngredient}
          onDelete={onIngredientDelete}
          onQuantityUpdate={onQuantityUpdate}
        />
      </div>
    );
  };

  if (recipeIngredients === undefined) {
    return <MainContentLoadingOverlay />;
  }

  return (
    <div className="w-full">
      {shouldShowNbPortionsForm && (
        <RecipeNbPortionsForm
          recipe={recipe}
          onSubmitted={hideNbPortionsForm}
          hasIngredients={quantifiedIngredients.length > 0}
        />
      )}
      {!shouldShowNbPortionsForm && (
        <div>
          <LinedTitle
            borderclassName="border-t-sky-500"
            className={`
              mb-8
              mt-2
            `}
          >
            <p
              className={`
                text-center
                text-lg
                text-sky-600
              `}
            >
              Vous saisissez les ingrédients pour
              <Tag
                onClick={showNbPortionsForm}
                tooltipText="Modifier"
                className={`
                  ml-2
                  cursor-pointer
                  bg-sky-500
                  font-black
                  text-white
                `}
                text={`${recipe.nbPortions} personne${recipe.nbPortions > 1 ? 's' : ''}`}
              />
            </p>
          </LinedTitle>
          <div
            className={`
              grid
              gap-4

              tablet:grid-cols-2
            `}
          >
            <Card
              className={`
                mb-2
                bg-white
                p-4
              `}
            >
              <p>Ajouter un ingrédient</p>
              <div className="my-4">
                <UnitHelpTable />
              </div>
              <CreateRecipeIngredientForm recipeId={recipe.id} />
            </Card>
            <IngredientsByCategories
              quantifiedIngredients={quantifiedIngredients}
              ingredientComponentFactory={editableIngredientComponentFactory}
              cardHeaderColor="bg-white"
            />
          </div>
        </div>
      )}
    </div>
  );
}
