import { useMutation, useQueryClient } from '@tanstack/react-query';
import { UseCustomMutationResult } from '#/utils/mutation';
import toast from 'react-hot-toast';
import {
  createRecipeInstruction,
  deleteRecipeInstruction,
  updateRecipeInstruction,
} from '#/modules/cooking/recipe-instruction/api';
import { RecipeInstructionsQueryKey } from '#/modules/cooking/recipe-instruction/queries';

export function useCreateRecipeInstructionMutation(): UseCustomMutationResult<typeof createRecipeInstruction> {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createRecipeInstruction,
    onSuccess: (_data, params) => {
      toast.success('instruction ajoutée', { id: 'global' });

      return queryClient.invalidateQueries({
        queryKey: [RecipeInstructionsQueryKey.List, params.recipeId],
      });
    },
  });
}

export function useDeleteRecipeInstructionMutation(
  recipeId: string,
): UseCustomMutationResult<typeof deleteRecipeInstruction> {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteRecipeInstruction,
    onSuccess: () => {
      toast.success('instruction supprimée', { id: 'global' });

      return queryClient.invalidateQueries({
        queryKey: [RecipeInstructionsQueryKey.List, recipeId],
      });
    },
  });
}

export function useUpdateRecipeInstructionMutation(
  recipeId: string,
): UseCustomMutationResult<typeof updateRecipeInstruction> {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateRecipeInstruction,
    onSuccess: () => {
      toast.success('instruction mise à jour', { id: 'global' });

      return queryClient.invalidateQueries({
        queryKey: [RecipeInstructionsQueryKey.List, recipeId],
      });
    },
  });
}
