import {
  createShoppingList,
  updateShoppingList,
  deleteShoppingList,
  deleteShoppingListIngredient,
  createShoppingListIngredient,
  updateShoppingListIngredient,
  createShoppingListProduct,
  deleteShoppingListProduct,
  updateShoppingListProduct,
  checkShoppingListIngredient,
  checkShoppingListProduct,
  addMealsToShoppingList,
  deleteShoppingListIngredientSuggestion,
  acceptShoppingListIngredientSuggestion,
} from '#/modules/shopping/shopping-list/api';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ShoppingListsQueryKey } from '#/modules/shopping/shopping-list/queries';
import { UseCustomMutationResult } from '#/utils/mutation';
import toast from 'react-hot-toast';

export function useCreateShoppingListMutation(): UseCustomMutationResult<typeof createShoppingList> {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createShoppingList,
    onSuccess: () => {
      toast.success('Liste de courses enregistrée', { id: 'global' });

      return queryClient.invalidateQueries({ queryKey: [ShoppingListsQueryKey.List] });
    },
  });
}

export function useAddMealsToShoppingListMutation(): UseCustomMutationResult<typeof addMealsToShoppingList> {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addMealsToShoppingList,
    onSuccess: (_data, variables) => {
      return Promise.all([
        queryClient.invalidateQueries({ queryKey: [ShoppingListsQueryKey.List] }),
        queryClient.invalidateQueries({
          queryKey: [ShoppingListsQueryKey.Find, variables.shoppingListId],
        }),
      ]);
    },
  });
}

export function useUpdateShoppingListMutation(): UseCustomMutationResult<typeof updateShoppingList> {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateShoppingList,
    onSuccess: (_data, variables) => {
      toast.success('Liste de courses mise à jour', { id: 'global' });

      return Promise.all([
        queryClient.invalidateQueries({ queryKey: [ShoppingListsQueryKey.List] }),
        queryClient.invalidateQueries({ queryKey: [ShoppingListsQueryKey.Find, variables.id] }),
      ]);
    },
  });
}

export function useDeleteShoppingListMutation(): UseCustomMutationResult<typeof deleteShoppingList> {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteShoppingList,
    onSuccess: () => {
      toast.success('Liste de courses supprimée', { id: 'global' });

      return queryClient.invalidateQueries({ queryKey: [ShoppingListsQueryKey.List] });
    },
  });
}

export function useDeleteShoppingListIngredientMutation(): UseCustomMutationResult<
  typeof deleteShoppingListIngredient
> {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteShoppingListIngredient,
    onSuccess: (_data, variables) => {
      toast.success('Ingrédient retiré de la liste', { id: 'global' });

      return Promise.all([
        queryClient.invalidateQueries({ queryKey: [ShoppingListsQueryKey.List] }),
        queryClient.invalidateQueries({
          queryKey: [ShoppingListsQueryKey.Find, variables.shoppingListId],
        }),
      ]);
    },
  });
}

export function useUpdateShoppingListIngredientMutation(): UseCustomMutationResult<
  typeof updateShoppingListIngredient
> {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateShoppingListIngredient,
    onSuccess: (_data, variables) => {
      toast.success('Quantité mise à jour', { id: 'global' });

      return Promise.all([
        queryClient.invalidateQueries({ queryKey: [ShoppingListsQueryKey.List] }),
        queryClient.invalidateQueries({
          queryKey: [ShoppingListsQueryKey.Find, variables.shoppingListId],
        }),
      ]);
    },
  });
}

export function useCheckShoppingListIngredientMutation(): UseCustomMutationResult<typeof checkShoppingListIngredient> {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: checkShoppingListIngredient,
    onSuccess: (_data, variables) => {
      return Promise.all([
        queryClient.invalidateQueries({ queryKey: [ShoppingListsQueryKey.List] }),
        queryClient.invalidateQueries({
          queryKey: [ShoppingListsQueryKey.Find, variables.shoppingListId],
        }),
      ]);
    },
  });
}

export function useCreateShoppingListIngredientMutation(): UseCustomMutationResult<
  typeof createShoppingListIngredient
> {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createShoppingListIngredient,
    onSuccess: (_data, variables) => {
      toast.success('Ingrédient ajouté à la liste', { id: 'global' });

      return Promise.all([
        queryClient.invalidateQueries({ queryKey: [ShoppingListsQueryKey.List] }),
        queryClient.invalidateQueries({
          queryKey: [ShoppingListsQueryKey.Find, variables.shoppingListId],
        }),
      ]);
    },
  });
}

export function useAcceptShoppingListSuggestionMutation(): UseCustomMutationResult<
  typeof acceptShoppingListIngredientSuggestion
> {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: acceptShoppingListIngredientSuggestion,
    onSuccess: (_data, variables) => {
      toast.success('Ingrédient ajouté à la liste', { id: 'global' });

      return Promise.all([
        queryClient.invalidateQueries({ queryKey: [ShoppingListsQueryKey.List] }),
        queryClient.invalidateQueries({
          queryKey: [ShoppingListsQueryKey.Find, variables.shoppingListId],
        }),
      ]);
    },
  });
}

export function useDeleteShoppingListSuggestionMutation(): UseCustomMutationResult<
  typeof deleteShoppingListIngredientSuggestion
> {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteShoppingListIngredientSuggestion,
    onSuccess: (_data, variables) => {
      toast.success('Suggestion retirée', { id: 'global' });

      return Promise.all([
        queryClient.invalidateQueries({ queryKey: [ShoppingListsQueryKey.List] }),
        queryClient.invalidateQueries({
          queryKey: [ShoppingListsQueryKey.Find, variables.shoppingListId],
        }),
      ]);
    },
  });
}

export function useCreateShoppingListProductMutation(): UseCustomMutationResult<typeof createShoppingListProduct> {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createShoppingListProduct,
    onSuccess: (_data, variables) => {
      toast.success('Produit ajouté à la liste', { id: 'global' });

      return Promise.all([
        queryClient.invalidateQueries({ queryKey: [ShoppingListsQueryKey.List] }),
        queryClient.invalidateQueries({
          queryKey: [ShoppingListsQueryKey.Find, variables.shoppingListId],
        }),
      ]);
    },
  });
}

export function useDeleteShoppingListProductMutation(): UseCustomMutationResult<typeof deleteShoppingListProduct> {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteShoppingListProduct,
    onSuccess: (_data, variables) => {
      toast.success('Produit retiré de la liste', { id: 'global' });

      return Promise.all([
        queryClient.invalidateQueries({ queryKey: [ShoppingListsQueryKey.List] }),
        queryClient.invalidateQueries({
          queryKey: [ShoppingListsQueryKey.Find, variables.shoppingListId],
        }),
      ]);
    },
  });
}

export function useUpdateShoppingListProductMutation(): UseCustomMutationResult<typeof updateShoppingListProduct> {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateShoppingListProduct,
    onSuccess: (_data, variables) => {
      toast.success('Quantité mise à jour', { id: 'global' });

      return Promise.all([
        queryClient.invalidateQueries({ queryKey: [ShoppingListsQueryKey.List] }),
        queryClient.invalidateQueries({
          queryKey: [ShoppingListsQueryKey.Find, variables.shoppingListId],
        }),
      ]);
    },
  });
}

export function useCheckShoppingListProductMutation(): UseCustomMutationResult<typeof checkShoppingListProduct> {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: checkShoppingListProduct,
    onSuccess: (_data, variables) => {
      return queryClient.invalidateQueries({
        queryKey: [ShoppingListsQueryKey.Find, variables.shoppingListId],
      });
    },
  });
}
