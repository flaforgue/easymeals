import { useIngredientCategories } from '#/modules/shared/ingredient-category/queries';
import { QuantifiedIngredient } from '#/shared';
import { ReactNode } from 'react';
import IngredientsCategory from '#/modules/shared/ingredient-category/components/ingredients-category';
import { groupQuantifiedIngredientsByCategories } from '#/modules/shared/ingredient-category/utils';

interface IngredientsByCategoriesProps<T extends QuantifiedIngredient> {
  quantifiedIngredients: T[];
  ingredientComponentFactory: (ingredient: T) => ReactNode;
  cardHeaderColor?: string;
}

export default function IngredientsByCategories<T extends QuantifiedIngredient>({
  quantifiedIngredients,
  ingredientComponentFactory,
  cardHeaderColor,
}: IngredientsByCategoriesProps<T>) {
  const ingredientCategories = useIngredientCategories();

  const ingredientsCategoriesComponents = groupQuantifiedIngredientsByCategories(
    quantifiedIngredients,
    ingredientCategories,
  )
    .sort((a, b) => b.quantifiedIngredients.length - a.quantifiedIngredients.length)
    .map((ingredientCategory) => {
      return (
        <IngredientsCategory
          key={ingredientCategory.id}
          ingredientCategoryId={ingredientCategory.id}
          quantifiedIngredients={ingredientCategory.quantifiedIngredients}
          ingredientComponentFactory={ingredientComponentFactory}
          cardHeaderColor={cardHeaderColor}
        />
      );
    });

  return <>{ingredientsCategoriesComponents}</>;
}
