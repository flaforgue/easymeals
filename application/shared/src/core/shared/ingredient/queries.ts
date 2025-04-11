export interface ListIngredientsQuery {
  search: string;
  ingredientCategoryId: null | string;
  unitId: null | string;
  onlyUserContent: boolean;
}
