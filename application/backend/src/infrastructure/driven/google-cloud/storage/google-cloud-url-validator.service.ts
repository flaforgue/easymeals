import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';
import { UrlValidatorService } from '#/core/generic/upload/url-validator.service';
import { ValidationException } from '#/core/generic/validation/validation.exception';

@Injectable()
export class GoogleCloudUrlValidatorService implements UrlValidatorService {
  private readonly bucketName: string;

  public constructor(configService: ConfigService) {
    this.bucketName = configService.getOrThrow<string>('USER_CONTENT_BUCKET_NAME');
  }

  public validate(url: string): void {
    if (!url.startsWith(`https://storage.googleapis.com/${this.bucketName}/`)) {
      throw new ValidationException(`${url} est une URL externe non autorisée`);
    }

    return;
  }
}
