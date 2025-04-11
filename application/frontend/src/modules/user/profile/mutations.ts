import { updateProfile } from '#/modules/user/profile/api';
import { ProfileQueryKey } from '#/modules/user/profile/queries';
import { UseCustomMutationResult } from '#/utils/mutation';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export function useUpdateProfileMutation(): UseCustomMutationResult<typeof updateProfile> {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateProfile,
    onSuccess: () => {
      return queryClient.invalidateQueries({ queryKey: [ProfileQueryKey.Find] });
    },
  });
}
