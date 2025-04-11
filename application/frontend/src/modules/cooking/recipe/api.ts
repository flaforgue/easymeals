import {
  CreateRecipeCommand,
  DeleteRecipeCommand,
  FindPublicRecipeQuery,
  ImportRecipeCommand,
  ListPublicRecipesQuery,
  ListRecipesQuery,
  Recipe,
  UpdateNbPortionsCommand,
  UpdateRecipeCommand,
} from '#/shared';
import { fetchPublicQuery } from '#/api/clients/public-client';
import { fetchPrivateQuery, fetchPrivateCommand } from '#/api/clients/private-client';

export function listPublicRecipes(query: ListPublicRecipesQuery): Promise<Recipe[]> {
  return fetchPublicQuery('/cooking/recipe/list', query) as Promise<Recipe[]>;
}

export function findPublicRecipe(query: FindPublicRecipeQuery): Promise<Recipe> {
  return fetchPublicQuery('/cooking/recipe/find', query) as Promise<Recipe>;
}

export function listRecipes(query: ListRecipesQuery): Promise<Recipe[]> {
  return fetchPrivateQuery('/cooking/recipe/list', query) as Promise<Recipe[]>;
}

export async function createRecipe(command: CreateRecipeCommand): Promise<void> {
  if (command.illustrationUrl === '') {
    command.illustrationUrl = null;
  }

  await fetchPrivateCommand('/cooking/recipe/create', command);
}

export async function updateRecipe(command: UpdateRecipeCommand): Promise<void> {
  if (command.illustrationUrl === '') {
    command.illustrationUrl = null;
  }

  await fetchPrivateCommand('/cooking/recipe/update', command);
}

export async function updateNbPortions(command: UpdateNbPortionsCommand): Promise<void> {
  await fetchPrivateCommand('/cooking/recipe/update-nb-portions', command);
}

export async function deleteRecipe(command: DeleteRecipeCommand): Promise<void> {
  await fetchPrivateCommand('/cooking/recipe/delete', command);
}

export async function importRecipe(command: ImportRecipeCommand): Promise<void> {
  await fetchPrivateCommand('/cooking/recipe/import', command);
}
