import { listProducts } from '#/modules/shopping/product/api';
import { ListProductsQuery } from '#/shared';
import { useQuery } from '@tanstack/react-query';

export enum ProductsQueryKey {
  List = 'products',
}

export function useProducts(optionalQuery?: ListProductsQuery) {
  const query = optionalQuery ?? {
    search: '',
    productCategoryId: null,
    onlyUserContent: false,
  };
  const { data, isLoading } = useQuery({
    queryKey: [ProductsQueryKey.List, query],
    queryFn: () => listProducts(query),
    staleTime: 5 * 60 * 1000,
  });

  if (data === undefined) {
    return {
      products: [],
      isLoading: isLoading,
    };
  }

  return {
    products: data,
    isLoading: isLoading,
  };
}
