import { listIngredientCategories } from '#/modules/shared/ingredient-category/api';
import { useQuery } from '@tanstack/react-query';

export enum IngredientCategoriesQueryKey {
  List = 'ingredient-categories',
}

export function useIngredientCategories() {
  const { data } = useQuery({
    queryKey: [IngredientCategoriesQueryKey.List],
    queryFn: listIngredientCategories,
    staleTime: Infinity,
  });

  if (data === undefined) {
    return [];
  }

  return data;
}
