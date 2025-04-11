import { useUploadImageMutation } from '#/modules/shared/generic/upload/mutations';
import { useGetImageUploadSignedUrl } from '#/modules/shared/generic/upload/queries';
import toast from 'react-hot-toast';

export function useImageSignedUpload(uploaderId: string, onChange: (url: string) => void) {
  const uploadSignedUrl = useGetImageUploadSignedUrl(uploaderId);
  const updateImageMutation = useUploadImageMutation(uploaderId);

  const uploadImage = (file: File | null) => {
    if (file === null) {
      return;
    }

    if (uploadSignedUrl === undefined) {
      toast.error("L'image n'a pas pu être téléchargée");

      return;
    }

    updateImageMutation.mutate(
      {
        uploadSignedUrl: uploadSignedUrl,
        file: file,
      },
      {
        onSuccess: () => {
          onChange(uploadSignedUrl.substring(0, uploadSignedUrl.indexOf('?')));
        },
      },
    );
  };

  return {
    uploadImage,
    isUploadPending: updateImageMutation.isPending,
  };
}
