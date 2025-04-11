import { ShoppingList } from '#/shared';

export function getShoppingListCompletionPercents(shoppingList: ShoppingList): number {
  const getCheckableData = (checkables: { isChecked: boolean }[]) =>
    checkables.reduce(
      (acc, curr) => {
        return {
          nbTotal: acc.nbTotal + 1,
          nbChecked: acc.nbChecked + (curr.isChecked ? 1 : 0),
        };
      },
      {
        nbTotal: 0,
        nbChecked: 0,
      },
    );
  const productsData = getCheckableData(shoppingList.products);
  const ingredientsData = getCheckableData(shoppingList.ingredients);
  const nbTotalItems = productsData.nbTotal + ingredientsData.nbTotal;
  if (nbTotalItems === 0) {
    return 0;
  }

  const percents = (productsData.nbChecked + ingredientsData.nbChecked) / nbTotalItems;

  return Math.round(100 * percents);
}
