import { uploadImage } from '#/modules/shared/generic/upload/api';
import { UploadSignedUrlQueryKey } from '#/modules/shared/generic/upload/queries';
import { UseCustomMutationResult } from '#/utils/mutation';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export function useUploadImageMutation(uploaderId: string): UseCustomMutationResult<typeof uploadImage> {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: uploadImage,
    onMutate: () => {
      return { uploaderId: uploaderId };
    },
    onSuccess: (_data, _variables, context) => {
      return queryClient.invalidateQueries({ queryKey: [UploadSignedUrlQueryKey.Image, context.uploaderId] });
    },
  });
}
