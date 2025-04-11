import {
  CreateMealCommand,
  DeleteMealCommand,
  FindMealQuery,
  ListMealsQuery,
  Meal,
  MoveMealCommand,
  UpdateMealCommand,
} from '#/shared';
import { fetchPrivateCommand, fetchPrivateQuery } from '#/api/clients/private-client';

export function listMeals(query: ListMealsQuery): Promise<Meal[]> {
  return fetchPrivateQuery('/planning/meal/list', query) as Promise<Meal[]>;
}

export async function createMeal(command: CreateMealCommand): Promise<void> {
  await fetchPrivateCommand('/planning/meal/create', command);
}

export async function updateMeal(command: UpdateMealCommand): Promise<void> {
  await fetchPrivateCommand('/planning/meal/update', command);
}

export async function moveMeal(command: MoveMealCommand): Promise<void> {
  await fetchPrivateCommand('/planning/meal/move', command);
}

export async function deleteMeal(command: DeleteMealCommand): Promise<void> {
  await fetchPrivateCommand('/planning/meal/delete', command);
}

export function findMeal(command: FindMealQuery): Promise<Meal> {
  return fetchPrivateQuery('/planning/meal/find', command) as Promise<Meal>;
}
