export interface CreateRecipeCommand {
  id: string;
  name: string;
  illustrationUrl: null | string;
  preparationTimeInMinutes: number;
  totalTimeInMinutes: number;
  isVegetarian: boolean;
  cuisineTypeId: string;
}

export interface UpdateRecipeCommand {
  id: string;
  name: string;
  illustrationUrl: null | string;
  preparationTimeInMinutes: number;
  totalTimeInMinutes: number;
  isVegetarian: boolean;
  cuisineTypeId: string;
}

export interface UpdateNbPortionsCommand {
  id: string;
  nbPortions: number;
}

export interface DeleteRecipeCommand {
  id: string;
}

export interface ImportRecipeCommand {
  recipeToImportId: string;
  recipeToCreateId: string;
}
