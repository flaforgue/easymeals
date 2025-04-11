import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { GoogleCloudSignedUrlService } from '#/infrastructure/driven/google-cloud/storage/google-cloud-signed-url.service';
import { SignedUrlService } from '#/core/generic/upload/signed-url.service';
import { UrlValidatorService } from '#/core/generic/upload/url-validator.service';
import { GoogleCloudUrlValidatorService } from '#/infrastructure/driven/google-cloud/storage/google-cloud-url-validator.service';

@Module({
  imports: [ConfigModule],
  exports: [SignedUrlService, UrlValidatorService],
  providers: [
    {
      provide: SignedUrlService,
      useClass: GoogleCloudSignedUrlService,
    },
    {
      provide: UrlValidatorService,
      useClass: GoogleCloudUrlValidatorService,
    },
  ],
})
export class UploadModule {}
