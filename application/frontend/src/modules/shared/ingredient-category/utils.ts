import { IngredientCategory, QuantifiedIngredient, getItemsBy } from '#/shared';
import { SelectOption } from '#/components/inputs/select-input';

export function buildIngredientCategorySelectOption(ingredientCategory: IngredientCategory): SelectOption<string> {
  return {
    value: ingredientCategory.id,
    label: ingredientCategory.name,
    illustrationUrl: ingredientCategory.illustrationUrl,
  };
}

export function groupQuantifiedIngredientsByCategories<T extends QuantifiedIngredient>(
  quantifiedIngredients: T[],
  ingredientCategories: IngredientCategory[],
) {
  return ingredientCategories.reduce((acc: { id: string; quantifiedIngredients: T[] }[], ingredientCategory) => {
    const categoryQuantifiedIngredients = getItemsBy(
      quantifiedIngredients,
      'ingredientCategoryId',
      ingredientCategory.id,
    );

    if (categoryQuantifiedIngredients.length === 0) {
      return acc;
    }

    return [
      ...acc,
      {
        id: ingredientCategory.id,
        quantifiedIngredients: categoryQuantifiedIngredients,
      },
    ];
  }, []);
}
