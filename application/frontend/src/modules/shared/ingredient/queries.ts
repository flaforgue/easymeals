import { listIngredients } from '#/modules/shared/ingredient/api';
import { ListIngredientsQuery } from '#/shared';
import { useQuery } from '@tanstack/react-query';

export enum IngredientsQueryKey {
  List = 'ingredients',
}

export function useIngredients(optionalQuery?: ListIngredientsQuery) {
  const query = optionalQuery ?? {
    search: '',
    ingredientCategoryId: null,
    unitId: null,
    onlyUserContent: false,
  };
  const { data, isLoading } = useQuery({
    queryKey: [IngredientsQueryKey.List, query],
    queryFn: () => listIngredients(query),
    staleTime: 5 * 60 * 1000,
  });

  if (data === undefined) {
    return {
      ingredients: [],
      isLoading: isLoading,
    };
  }

  return {
    ingredients: data,
    isLoading: isLoading,
  };
}
