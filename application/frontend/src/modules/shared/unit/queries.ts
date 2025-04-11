import { listUnits } from '#/modules/shared/unit/api';
import { useQuery } from '@tanstack/react-query';

export enum UnitsQueryKey {
  List = 'units',
}

export function useUnits() {
  const { data } = useQuery({
    queryKey: [UnitsQueryKey.List],
    queryFn: listUnits,
    staleTime: Infinity,
  });

  if (data === undefined) {
    return [];
  }

  return data;
}
