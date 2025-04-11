import { fetchPublicQuery } from '#/api/clients/public-client';
import { fetchPrivateCommand } from '#/api/clients/private-client';
import {
  CreateRecipeIngredientCommand,
  DeleteRecipeIngredientCommand,
  ListRecipeIngredientQuery,
  RecipeIngredient,
  UpdateRecipeIngredientCommand,
} from '#/shared';

export function listPublicRecipeIngredients(query: ListRecipeIngredientQuery): Promise<RecipeIngredient[]> {
  return fetchPublicQuery('/cooking/recipe-ingredient/list', query) as Promise<RecipeIngredient[]>;
}

export async function createRecipeIngredient(command: CreateRecipeIngredientCommand): Promise<void> {
  await fetchPrivateCommand('/cooking/recipe-ingredient/create', command);
}

export async function updateRecipeIngredient(command: UpdateRecipeIngredientCommand): Promise<void> {
  await fetchPrivateCommand('/cooking/recipe-ingredient/update', command);
}

export async function deleteRecipeIngredient(command: DeleteRecipeIngredientCommand): Promise<void> {
  await fetchPrivateCommand('/cooking/recipe-ingredient/delete', command);
}
