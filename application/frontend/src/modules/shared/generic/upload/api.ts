import { fetchPrivateQuery } from '#/api/clients/private-client';
import { InvalidFileException } from '#/api/errors/invalid-file-exception';
import { UPLOAD_HEADERS, UploadSignedUrlResponse } from '#/shared';

export function getImageUploadSignedUrl(): Promise<UploadSignedUrlResponse> {
  return fetchPrivateQuery('/upload-signed-url/image') as Promise<UploadSignedUrlResponse>;
}

export async function uploadImage(input: { uploadSignedUrl: string; file: File }): Promise<void> {
  const response = await fetch(input.uploadSignedUrl, {
    method: 'PUT',
    headers: {
      'Content-Type': input.file.type,
      ...UPLOAD_HEADERS,
    },
    body: input.file,
  });

  if (response.status === 200) {
    return;
  }

  if (response.status === 403) {
    throw new InvalidFileException("Le fichier n'est pas une image JPEG ou fait plus de 1 Mo");
  }

  throw new Error(`Error during upload, received ${response.status}`);
}
