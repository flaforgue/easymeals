import { listCuisineTypes } from '#/modules/cooking/cuisine-type/api';
import { useQuery } from '@tanstack/react-query';

export enum CuisineTypesQueryKey {
  List = 'cuisine-types',
}

export function useCuisineTypes() {
  const { data } = useQuery({
    queryKey: [CuisineTypesQueryKey.List],
    queryFn: listCuisineTypes,
    staleTime: Infinity,
  });

  if (data === undefined) {
    return [];
  }

  return data;
}
