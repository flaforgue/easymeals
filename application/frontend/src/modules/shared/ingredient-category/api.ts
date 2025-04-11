import { fetchPublicQuery } from '#/api/clients/public-client';
import { IngredientCategory } from '#/shared';

export function listIngredientCategories(): Promise<IngredientCategory[]> {
  return fetchPublicQuery('/shared/ingredient-category/list') as Promise<IngredientCategory[]>;
}
