export interface CreateRecipeInstructionCommand {
  id: string;
  recipeId: string;
  text: string;
  timerNbMinutes: number;
  order: number;
}

export interface UpdateRecipeInstructionCommand {
  id: string;
  text: string;
  timerNbMinutes: number;
}

export interface DeleteRecipeInstructionCommand {
  id: string;
}
