import {
  CreateRecipeInstructionCommand,
  DeleteRecipeInstructionCommand,
  ListRecipeInstructionsQuery,
  RecipeInstruction,
  UpdateRecipeInstructionCommand,
} from '#/shared';
import { fetchPublicQuery } from '#/api/clients/public-client';
import { fetchPrivateCommand } from '#/api/clients/private-client';

export function listPublicRecipeInstructions(query: ListRecipeInstructionsQuery): Promise<RecipeInstruction[]> {
  return fetchPublicQuery('/cooking/recipe-instruction/list', query) as Promise<RecipeInstruction[]>;
}

export async function createRecipeInstruction(command: CreateRecipeInstructionCommand): Promise<void> {
  await fetchPrivateCommand('/cooking/recipe-instruction/create', command);
}

export async function updateRecipeInstruction(command: UpdateRecipeInstructionCommand): Promise<void> {
  await fetchPrivateCommand('/cooking/recipe-instruction/update', command);
}

export async function deleteRecipeInstruction(command: DeleteRecipeInstructionCommand): Promise<void> {
  await fetchPrivateCommand('/cooking/recipe-instruction/delete', command);
}
