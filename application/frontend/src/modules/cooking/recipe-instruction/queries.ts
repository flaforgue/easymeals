import { listPublicRecipeInstructions } from '#/modules/cooking/recipe-instruction/api';
import { useQuery } from '@tanstack/react-query';

export enum RecipeInstructionsQueryKey {
  List = 'recipe-instructions',
}
export function useRecipeInstructions(recipeId: string) {
  const { data } = useQuery({
    queryKey: [RecipeInstructionsQueryKey.List, recipeId],
    queryFn: () => listPublicRecipeInstructions({ recipeId: recipeId }),
    staleTime: 5 * 60 * 1000,
  });

  if (data === undefined) {
    return [];
  }

  return data;
}
