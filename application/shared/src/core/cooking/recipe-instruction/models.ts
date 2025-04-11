export interface RecipeInstruction {
  id: string;
  recipeId: string;
  order: number;
  text: string;
  timerNbMinutes: number;
}
