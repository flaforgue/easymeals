import { findProfile } from '#/modules/user/profile/api';
import { useQuery } from '@tanstack/react-query';

export enum ProfileQueryKey {
  Find = 'profile',
}

export function useProfile() {
  const { data } = useQuery({
    queryKey: [ProfileQueryKey.Find],
    queryFn: findProfile,
    staleTime: 5 * 60 * 1000,
  });

  return data;
}
