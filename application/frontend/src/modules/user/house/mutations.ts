import { joinHouse, updateUserHouse } from '#/modules/user/house/api';
import { HouseQueryKey } from '#/modules/user/house/queries';
import { UseCustomMutationResult } from '#/utils/mutation';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

export function useUpdateUserHouseMutation(): UseCustomMutationResult<typeof updateUserHouse> {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateUserHouse,
    onSuccess: () => {
      toast.success('Compte mis à jour', { id: 'global' });

      return queryClient.invalidateQueries({ queryKey: [HouseQueryKey.User] });
    },
  });
}

export function useJoinHouseMutation(): UseCustomMutationResult<typeof joinHouse> {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: joinHouse,
    onSuccess: () => {
      return Promise.all([queryClient.invalidateQueries(), queryClient.clear()]);
    },
  });
}
