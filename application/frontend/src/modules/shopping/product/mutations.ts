import { createProduct, deleteProduct, updateProduct } from '#/modules/shopping/product/api';
import { ProductsQueryKey } from '#/modules/shopping/product/queries';
import { ShoppingListsQueryKey } from '#/modules/shopping/shopping-list/queries';
import { UseCustomMutationResult } from '#/utils/mutation';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

export function useCreateProductMutation(): UseCustomMutationResult<typeof createProduct> {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createProduct,
    onSuccess: () => {
      toast.success('Produit ajouté', { id: 'global' });

      return queryClient.invalidateQueries({ queryKey: [ProductsQueryKey.List] });
    },
  });
}

export function useDeleteProductMutation(): UseCustomMutationResult<typeof deleteProduct> {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      toast.success('Produit supprimé', { id: 'global' });

      return Promise.all([
        queryClient.invalidateQueries({ queryKey: [ProductsQueryKey.List] }),
        queryClient.invalidateQueries({ queryKey: [ShoppingListsQueryKey.List] }),
      ]);
    },
  });
}

export function useUpdateProductMutation(): UseCustomMutationResult<typeof updateProduct> {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateProduct,
    onSuccess: () => {
      toast.success('Produit mis à jour', { id: 'global' });

      return Promise.all([
        queryClient.invalidateQueries({ queryKey: [ProductsQueryKey.List] }),
        queryClient.invalidateQueries({ queryKey: [ShoppingListsQueryKey.List] }),
      ]);
    },
  });
}
