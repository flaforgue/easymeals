import { scaleRecipeIngredients } from '#/modules/cooking/recipe-ingredient/utils';
import { recipeIngredientToQuantifiedIngredient } from '#/modules/cooking/recipe-ingredient/utils';
import { RecipeIngredient } from '#/shared';
import { useMemo } from 'react';

export default function useScaledRecipeIngredients(
  recipeIngredients: RecipeIngredient[],
  initialNbPortions: number,
  targetNbPortions: number,
) {
  return useMemo(() => {
    if (recipeIngredients.length === 0) {
      return [];
    }

    const initialQuantifiedIngredients = recipeIngredients.map(recipeIngredientToQuantifiedIngredient);

    return scaleRecipeIngredients(initialQuantifiedIngredients, initialNbPortions, targetNbPortions);
  }, [targetNbPortions, initialNbPortions, recipeIngredients]);
}
