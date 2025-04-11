import {
  CreateIngredientCommand,
  DeleteIngredientCommand,
  Ingredient,
  ListIngredientsQuery,
  UpdateIngredientCommand,
} from '#/shared';
import { fetchPrivateCommand, fetchPrivateQuery } from '#/api/clients/private-client';

export function listIngredients(query: ListIngredientsQuery): Promise<Ingredient[]> {
  return fetchPrivateQuery('/shared/ingredient/list', query) as Promise<Ingredient[]>;
}

export function createIngredient(command: CreateIngredientCommand): Promise<void> {
  return fetchPrivateCommand('/shared/ingredient/create', command) as Promise<void>;
}

export function deleteIngredient(command: DeleteIngredientCommand): Promise<void> {
  return fetchPrivateCommand('/shared/ingredient/delete', command) as Promise<void>;
}

export function updateIngredient(command: UpdateIngredientCommand): Promise<void> {
  return fetchPrivateCommand('/shared/ingredient/update', command) as Promise<void>;
}
