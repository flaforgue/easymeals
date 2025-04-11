import {
  AcceptShoppingListIngredientSuggestionCommand,
  AddMealsToShoppingListCommand,
  CheckShoppingListIngredientCommand,
  CheckShoppingListProductCommand,
  CreateShoppingListCommand,
  CreateShoppingListIngredientCommand,
  CreateShoppingListProductCommand,
  DeleteShoppingListCommand,
  DeleteShoppingListIngredientCommand,
  DeleteShoppingListIngredientSuggestionCommand,
  DeleteShoppingListProductCommand,
  FindShoppingListQuery,
  ListShoppingListsQuery,
  ShoppingList,
  UpdateShoppingListCommand,
  UpdateShoppingListIngredientCommand,
  UpdateShoppingListProductCommand,
} from '#/shared';
import { fetchPrivateCommand, fetchPrivateQuery } from '#/api/clients/private-client';

export function findShoppingList(query: FindShoppingListQuery): Promise<ShoppingList> {
  return fetchPrivateQuery('/shopping/shopping-list/find', query) as Promise<ShoppingList>;
}

export async function createShoppingList(command: CreateShoppingListCommand): Promise<void> {
  await fetchPrivateCommand('/shopping/shopping-list/create', command);
}

export async function updateShoppingList(command: UpdateShoppingListCommand): Promise<void> {
  await fetchPrivateCommand('/shopping/shopping-list/update', command);
}

export async function addMealsToShoppingList(command: AddMealsToShoppingListCommand): Promise<void> {
  await fetchPrivateCommand('/shopping/shopping-list/add-meals', command);
}

export async function deleteShoppingList(command: DeleteShoppingListCommand): Promise<void> {
  await fetchPrivateCommand('/shopping/shopping-list/delete', command);
}

export async function deleteShoppingListIngredient(command: DeleteShoppingListIngredientCommand): Promise<void> {
  await fetchPrivateCommand('/shopping/shopping-list-ingredient/delete', command);
}

export async function updateShoppingListIngredient(command: UpdateShoppingListIngredientCommand): Promise<void> {
  await fetchPrivateCommand('/shopping/shopping-list-ingredient/update', command);
}

export async function checkShoppingListIngredient(command: CheckShoppingListIngredientCommand): Promise<void> {
  await fetchPrivateCommand('/shopping/shopping-list-ingredient/check', command);
}

export async function createShoppingListIngredient(command: CreateShoppingListIngredientCommand): Promise<void> {
  await fetchPrivateCommand('/shopping/shopping-list-ingredient/create', command);
}

export async function acceptShoppingListIngredientSuggestion(
  command: AcceptShoppingListIngredientSuggestionCommand,
): Promise<void> {
  await fetchPrivateCommand('/shopping/shopping-list-ingredient-suggestion/accept', command);
}

export async function deleteShoppingListIngredientSuggestion(
  command: DeleteShoppingListIngredientSuggestionCommand,
): Promise<void> {
  await fetchPrivateCommand('/shopping/shopping-list-ingredient-suggestion/delete', command);
}

export async function createShoppingListProduct(command: CreateShoppingListProductCommand): Promise<void> {
  await fetchPrivateCommand('/shopping/shopping-list-product/create', command);
}

export async function deleteShoppingListProduct(command: DeleteShoppingListProductCommand): Promise<void> {
  await fetchPrivateCommand('/shopping/shopping-list-product/delete', command);
}

export async function updateShoppingListProduct(command: UpdateShoppingListProductCommand): Promise<void> {
  await fetchPrivateCommand('/shopping/shopping-list-product/update', command);
}

export async function checkShoppingListProduct(command: CheckShoppingListProductCommand): Promise<void> {
  await fetchPrivateCommand('/shopping/shopping-list-product/check', command);
}

export function listShoppingLists(query: ListShoppingListsQuery): Promise<ShoppingList[]> {
  return fetchPrivateQuery('/shopping/shopping-list/list', query) as Promise<ShoppingList[]>;
}
