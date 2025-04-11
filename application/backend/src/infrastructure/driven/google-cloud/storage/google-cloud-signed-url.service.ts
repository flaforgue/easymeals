import { ConfigService } from '@nestjs/config';
import { Storage } from '@google-cloud/storage';
import { UPLOAD_HEADERS, uuidv4 } from '#/shared';
import { SignedUrlService } from '#/core/generic/upload/signed-url.service';
import { Injectable } from '@nestjs/common';

interface JWTInput {
  type?: string;
  client_email?: string;
  private_key?: string;
  private_key_id?: string;
  project_id?: string;
  client_id?: string;
  client_secret?: string;
  refresh_token?: string;
  quota_project_id?: string;
  universe_domain?: string;
}

@Injectable()
export class GoogleCloudSignedUrlService implements SignedUrlService {
  private readonly client: Storage;
  private readonly bucketName: string;

  public constructor(configService: ConfigService) {
    this.bucketName = configService.getOrThrow<string>('USER_CONTENT_BUCKET_NAME');

    const base64Credentials = configService.getOrThrow<string>('USER_CONTENT_UPLOADER_BASE_64_CREDENTIALS');
    const jsonStringCredentials = Buffer.from(base64Credentials, 'base64').toString().replace(/\n/g, '');
    const credentials = JSON.parse(jsonStringCredentials) as JWTInput;
    this.client = new Storage({
      credentials: credentials,
    });
  }

  public async getImageUploadSignedUrl(houseId: string): Promise<string> {
    const destination = `houses/${houseId}/${uuidv4()}.jpeg`;

    const [url] = await this.client
      .bucket(this.bucketName)
      .file(destination)
      .getSignedUrl({
        version: 'v4',
        action: 'write',
        expires: Date.now() + 15 * 60 * 1000, // 15 minutes
        contentType: 'image/jpeg',
        extensionHeaders: {
          ...UPLOAD_HEADERS,
        },
      });

    return url;
  }
}
