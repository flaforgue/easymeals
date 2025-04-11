import { createRecipe, deleteRecipe, importRecipe, updateNbPortions, updateRecipe } from '#/modules/cooking/recipe/api';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { RecipesQueryKey } from '#/modules/cooking/recipe/queries';
import { UseCustomMutationResult } from '#/utils/mutation';
import toast from 'react-hot-toast';

export function useCreateRecipeMutation(): UseCustomMutationResult<typeof createRecipe> {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createRecipe,
    onSuccess: () => {
      toast.success('Recette ajoutée', { id: 'global' });

      return Promise.all([
        queryClient.invalidateQueries({ queryKey: [RecipesQueryKey.List] }),
        queryClient.invalidateQueries({ queryKey: [RecipesQueryKey.PublicList] }),
      ]);
    },
  });
}

export function useDeleteRecipeMutation(): UseCustomMutationResult<typeof deleteRecipe> {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteRecipe,
    onSuccess: () => {
      toast.success('Recette supprimée', { id: 'global' });

      return Promise.all([
        queryClient.invalidateQueries({ queryKey: [RecipesQueryKey.List] }),
        queryClient.invalidateQueries({ queryKey: [RecipesQueryKey.PublicList] }),
      ]);
    },
  });
}

export function useImportRecipeMutation(): UseCustomMutationResult<typeof importRecipe> {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: importRecipe,
    onSuccess: () => {
      toast.success('Recette enregistrée', { id: 'global' });

      return Promise.all([
        queryClient.invalidateQueries({ queryKey: [RecipesQueryKey.List] }),
        queryClient.invalidateQueries({ queryKey: [RecipesQueryKey.PublicList] }),
      ]);
    },
  });
}

export function useUpdateRecipeMutation(): UseCustomMutationResult<typeof updateRecipe> {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateRecipe,
    onSuccess: (_data, params) => {
      toast.success('Recette mise à jour', { id: 'global' });

      return Promise.all([
        queryClient.invalidateQueries({ queryKey: [RecipesQueryKey.List] }),
        queryClient.invalidateQueries({ queryKey: [RecipesQueryKey.PublicList] }),
        queryClient.invalidateQueries({ queryKey: [RecipesQueryKey.Find, params.id] }),
        queryClient.invalidateQueries({ queryKey: [RecipesQueryKey.PublicFind, params.id] }),
      ]);
    },
  });
}

export function useUpdateNbPortionsMutation(): UseCustomMutationResult<typeof updateNbPortions> {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateNbPortions,
    onSuccess: (_data, params) => {
      toast.success('Nombre de portions confirmé', { id: 'global' });

      return Promise.all([
        queryClient.invalidateQueries({ queryKey: [RecipesQueryKey.List] }),
        queryClient.invalidateQueries({ queryKey: [RecipesQueryKey.PublicList] }),
        queryClient.invalidateQueries({ queryKey: [RecipesQueryKey.Find, params.id] }),
        queryClient.invalidateQueries({ queryKey: [RecipesQueryKey.PublicFind, params.id] }),
      ]);
    },
  });
}
