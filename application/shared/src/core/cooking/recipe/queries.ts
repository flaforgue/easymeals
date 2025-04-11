export interface FindRecipeQuery {
  id: string;
}

export interface FindPublicRecipeQuery {
  id: string;
}

export interface ListRecipesQuery {
  search: string;
  cuisineTypeId: null | string;
  isVegetarian: boolean;
  isFast: boolean;
  isUserContent: boolean;
  isBookmark: boolean;
}

export interface ListPublicRecipesQuery {
  search: string;
  cuisineTypeId: null | string;
  isVegetarian: boolean;
  isFast: boolean;
}

export interface FindPublicRecipeQuery {
  id: string;
}
