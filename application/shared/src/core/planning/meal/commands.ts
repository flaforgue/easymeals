export interface CreateMealCommand {
  id: string;
  date: Date;
  nbPortions: number;
  mealType: string;
  recipeId: string;
}

export interface DeleteMealCommand {
  id: string;
}

export interface UpdateMealCommand {
  id: string;
  nbPortions: number;
  recipeId: string;
}

export interface MoveMealCommand {
  mealId: string;
  newMealType: string;
  newDate: Date;
}
