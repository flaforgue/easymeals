import { getImageUploadSignedUrl } from '#/modules/shared/generic/upload/api';
import { keepPreviousData, useQuery } from '@tanstack/react-query';

export enum UploadSignedUrlQueryKey {
  Image = 'image',
}

export function useGetImageUploadSignedUrl(id: string) {
  const { data } = useQuery({
    queryKey: [UploadSignedUrlQueryKey.Image, id],
    queryFn: getImageUploadSignedUrl,
    staleTime: 0,
    refetchInterval: 60 * 1000 * 10, // 10 minutes
    refetchOnReconnect: true,
    refetchOnWindowFocus: true,
    placeholderData: keepPreviousData,
  });

  return data?.uploadSignedUrl;
}
