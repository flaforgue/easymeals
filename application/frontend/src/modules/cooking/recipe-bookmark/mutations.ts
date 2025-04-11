import { useMutation, useQueryClient } from '@tanstack/react-query';
import { UseCustomMutationResult } from '#/utils/mutation';
import toast from 'react-hot-toast';
import { createRecipeBookmark, deleteRecipeBookmark } from '#/modules/cooking/recipe-bookmark/api';
import { RecipeBookmarksQueryKey } from '#/modules/cooking/recipe-bookmark/queries';

export function useCreateRecipeBookmarkMutation(): UseCustomMutationResult<typeof createRecipeBookmark> {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createRecipeBookmark,
    onSuccess: () => {
      toast.success('Favoris ajouté', { id: 'global' });

      return queryClient.invalidateQueries({ queryKey: [RecipeBookmarksQueryKey.List] });
    },
  });
}

export function useDeleteRecipeBookmarkMutation(): UseCustomMutationResult<typeof deleteRecipeBookmark> {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteRecipeBookmark,
    onSuccess: () => {
      toast.success('Favoris supprimé', { id: 'global' });

      return queryClient.invalidateQueries({ queryKey: [RecipeBookmarksQueryKey.List] });
    },
  });
}
