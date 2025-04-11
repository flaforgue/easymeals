import { findHouseByJoinKey, findUserHouse } from '#/modules/user/house/api';
import { useQuery } from '@tanstack/react-query';

export enum HouseQueryKey {
  User = 'user-house',
  Find = 'house',
}

export function useHouseByJoinKey(joinKey: string) {
  const { data } = useQuery({
    queryKey: [HouseQueryKey.Find, joinKey],
    queryFn: () => findHouseByJoinKey({ joinKey: joinKey }),
    staleTime: 5 * 60 * 1000,
  });

  return data;
}

export function useUserHouse() {
  const { data } = useQuery({
    queryKey: [HouseQueryKey.User],
    queryFn: findUserHouse,
    staleTime: 5 * 60 * 1000,
  });

  return data;
}

export function useUserHouseId() {
  const { data } = useQuery({
    queryKey: [HouseQueryKey.User],
    queryFn: findUserHouse,
    staleTime: 5 * 60 * 1000,
  });

  return data?.id;
}
