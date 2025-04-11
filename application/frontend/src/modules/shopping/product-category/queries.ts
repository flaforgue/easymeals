import { listProductCategories } from '#/modules/shopping/product-category/api';
import { useQuery } from '@tanstack/react-query';

export enum ProductCategoriesQueryKey {
  List = 'product-categories',
}

export function useProductCategories() {
  const { data } = useQuery({
    queryKey: [ProductCategoriesQueryKey.List],
    queryFn: listProductCategories,
    staleTime: Infinity,
  });

  if (data === undefined) {
    return [];
  }

  return data;
}
