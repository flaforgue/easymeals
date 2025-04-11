import Card from '#/components/cards/card';
import { getItemById } from '#/utils/array';
import { useIngredientCategories } from '#/modules/shared/ingredient-category/queries';
import { QuantifiedIngredient } from '#/shared';
import { ReactNode } from 'react';
import { getRowSpan } from '#/utils/grids';

interface IngredientsCategoryProps<T extends QuantifiedIngredient> {
  ingredientCategoryId: string;
  quantifiedIngredients: T[];
  ingredientComponentFactory: (ingredient: T) => ReactNode;
  cardHeaderColor?: string;
}

export default function IngredientsCategory<T extends QuantifiedIngredient>({
  ingredientCategoryId,
  quantifiedIngredients,
  ingredientComponentFactory,
  cardHeaderColor,
}: IngredientsCategoryProps<T>) {
  const ingredientCategories = useIngredientCategories();
  const ingredientCategory = getItemById(ingredientCategories, ingredientCategoryId);

  if (ingredientCategory === undefined) {
    return null;
  }

  const ingredientsComponents = quantifiedIngredients
    .sort((a, b) => a.quantity - b.quantity)
    .map((quantifiedIngredient) => {
      return (
        <li
          key={quantifiedIngredient.id}
          className="text-slate-700"
        >
          {ingredientComponentFactory(quantifiedIngredient)}
        </li>
      );
    });

  const rowSpan = getRowSpan(quantifiedIngredients.length);

  return (
    <Card
      className={`
        ${rowSpan}

        bg-white
      `}
    >
      <div
        className={`
          flex
          items-center
          border-b
          p-4
          text-lg

          ${
            cardHeaderColor ??
            `
              border-sky-100
              bg-sky-100
            `
          }
        `}
      >
        <img
          height="45"
          width="45"
          src={ingredientCategory.illustrationUrl}
          className={`
            mr-2
            overflow-visible
            rounded-full
            bg-white
            p-2.5
            shadow
          `}
        />
        {ingredientCategory.name}
      </div>
      <ul
        className={`
          space-y-2
          p-4
        `}
      >
        {ingredientsComponents}
      </ul>
    </Card>
  );
}
