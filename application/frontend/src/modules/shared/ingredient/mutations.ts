import { RecipeIngredientsQueryKey } from '#/modules/cooking/recipe-ingredient/queries';
import { createIngredient, deleteIngredient, updateIngredient } from '#/modules/shared/ingredient/api';
import { IngredientsQueryKey } from '#/modules/shared/ingredient/queries';
import { ShoppingListsQueryKey } from '#/modules/shopping/shopping-list/queries';
import { UseCustomMutationResult } from '#/utils/mutation';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

export function useCreateIngredientMutation(): UseCustomMutationResult<typeof createIngredient> {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createIngredient,
    onSuccess: () => {
      toast.success('Ingrédient ajouté', { id: 'global' });

      return queryClient.invalidateQueries({ queryKey: [IngredientsQueryKey.List] });
    },
  });
}

export function useDeleteIngredientMutation(): UseCustomMutationResult<typeof deleteIngredient> {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteIngredient,
    onSuccess: () => {
      toast.success('Ingrédient supprimé', { id: 'global' });

      return Promise.all([
        queryClient.invalidateQueries({ queryKey: [IngredientsQueryKey.List] }),
        queryClient.invalidateQueries({ queryKey: [RecipeIngredientsQueryKey.List] }),
        queryClient.invalidateQueries({ queryKey: [ShoppingListsQueryKey.List] }),
      ]);
    },
  });
}

export function useUpdateIngredientMutation(): UseCustomMutationResult<typeof updateIngredient> {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateIngredient,
    onSuccess: () => {
      toast.success('Ingrédient mis à jour', { id: 'global' });

      return Promise.all([
        queryClient.invalidateQueries({ queryKey: [IngredientsQueryKey.List] }),
        queryClient.invalidateQueries({ queryKey: [RecipeIngredientsQueryKey.List] }),
        queryClient.invalidateQueries({ queryKey: [ShoppingListsQueryKey.List] }),
      ]);
    },
  });
}
