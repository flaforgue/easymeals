import { listPublicRecipeIngredients } from '#/modules/cooking/recipe-ingredient/api';
import { useQuery } from '@tanstack/react-query';

export enum RecipeIngredientsQueryKey {
  List = 'recipe-ingredients',
}
export function useRecipeIngredients(recipeId: string) {
  const { data } = useQuery({
    queryKey: [RecipeIngredientsQueryKey.List, recipeId],
    queryFn: () => listPublicRecipeIngredients({ recipeId: recipeId }),
    staleTime: 5 * 60 * 1000,
  });

  return data;
}
