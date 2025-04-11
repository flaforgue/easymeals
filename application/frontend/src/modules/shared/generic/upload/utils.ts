import { uuidv4 } from '#/shared';

export function convertBase64ImageToFile(base64String: string): File {
  const prefix = 'data:image/jpeg;base64,';
  if (base64String.indexOf(prefix) === -1) {
    throw new Error(`Cannot convert ${base64String}`);
  }

  const base64Data = base64String.substring(prefix.length);
  const sliceSize = 512;
  const byteCharacters: string = window.atob(base64Data);
  const byteArrays: Uint8Array[] = [];

  for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    const slice: string = byteCharacters.slice(offset, offset + sliceSize);

    const byteNumbers: number[] = [];
    for (let i = 0; i < slice.length; i++) {
      byteNumbers.push(slice.charCodeAt(i));
    }

    const byteArray: Uint8Array = new Uint8Array(byteNumbers);

    byteArrays.push(byteArray);
  }

  return new File(byteArrays, `${uuidv4()}.jpeg`, {
    type: 'image/jpeg',
  });
}
