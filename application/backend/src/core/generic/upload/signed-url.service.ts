export abstract class SignedUrlService {
  public abstract getImageUploadSignedUrl(houseId: string): Promise<string>;
}
