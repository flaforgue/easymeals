import {
  createRecipeIngredient,
  deleteRecipeIngredient,
  updateRecipeIngredient,
} from '#/modules/cooking/recipe-ingredient/api';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { UseCustomMutationResult } from '#/utils/mutation';
import toast from 'react-hot-toast';
import { RecipeIngredientsQueryKey } from '#/modules/cooking/recipe-ingredient/queries';

export function useCreateRecipeIngredientMutation(): UseCustomMutationResult<typeof createRecipeIngredient> {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createRecipeIngredient,
    onSuccess: (_data, params) => {
      toast.success('ingrédient ajouté', { id: 'global' });

      return queryClient.invalidateQueries({
        queryKey: [RecipeIngredientsQueryKey.List, params.recipeId],
      });
    },
  });
}

export function useDeleteRecipeIngredientMutation(): UseCustomMutationResult<typeof deleteRecipeIngredient> {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteRecipeIngredient,
    onSuccess: (_data, params) => {
      toast.success('ingrédient supprimé', { id: 'global' });

      return queryClient.invalidateQueries({
        queryKey: [RecipeIngredientsQueryKey.List, params.recipeId],
      });
    },
  });
}

export function useUpdateRecipeIngredientMutation(): UseCustomMutationResult<typeof updateRecipeIngredient> {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateRecipeIngredient,
    onSuccess: (_data, params) => {
      toast.success('quantité mise à jour', { id: 'global' });

      return queryClient.invalidateQueries({
        queryKey: [RecipeIngredientsQueryKey.List, params.recipeId],
      });
    },
  });
}
