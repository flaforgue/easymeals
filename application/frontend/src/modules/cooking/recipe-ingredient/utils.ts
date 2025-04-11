import { QuantifiedIngredient, RecipeIngredient, scaleQuantity } from '#/shared';

export function scaleRecipeIngredients(
  initialQuantifiedIngredients: QuantifiedIngredient[],
  initialNbPortions: number,
  targetNbPortions: number,
): QuantifiedIngredient[] {
  return initialQuantifiedIngredients.map((initialQuantifiedIngredients) => {
    return {
      ...initialQuantifiedIngredients,
      quantity: scaleQuantity(initialQuantifiedIngredients.quantity, initialNbPortions, targetNbPortions),
    };
  });
}

export function recipeIngredientToQuantifiedIngredient(recipeIngredient: RecipeIngredient): QuantifiedIngredient {
  return {
    id: recipeIngredient.ingredientId,
    name: recipeIngredient.ingredientName,
    quantity: recipeIngredient.quantity,
    unitAbbreviation: recipeIngredient.unitAbbreviation,
    unitName: recipeIngredient.unitName,
    unitCode: recipeIngredient.unitCode,
    ingredientCategoryId: recipeIngredient.ingredientCategoryId,
  };
}
