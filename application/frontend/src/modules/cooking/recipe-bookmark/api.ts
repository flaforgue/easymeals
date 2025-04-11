import { CreateRecipeBookmarkCommand, DeleteRecipeBookmarkCommand, RecipeBookmark } from '#/shared';
import { fetchPrivateCommand, fetchPrivateQuery } from '#/api/clients/private-client';

export function listRecipeBookmarks(): Promise<RecipeBookmark[]> {
  return fetchPrivateQuery('/cooking/recipe-bookmark/list') as Promise<RecipeBookmark[]>;
}

export async function createRecipeBookmark(command: CreateRecipeBookmarkCommand): Promise<void> {
  await fetchPrivateCommand('/cooking/recipe-bookmark/create', command);
}

export async function deleteRecipeBookmark(command: DeleteRecipeBookmarkCommand): Promise<void> {
  await fetchPrivateCommand('/cooking/recipe-bookmark/delete', command);
}
