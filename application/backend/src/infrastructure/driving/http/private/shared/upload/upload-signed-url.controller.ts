import { Controller, Get, HttpCode } from '@nestjs/common';
import { Auth } from '#/infrastructure/driving/http/shared/auth/auth.decorator';
import { AuthUser } from '#/core/generic/auth/auth-user.interface';
import { PrivateBaseController } from '#/infrastructure/driving/http/private/private-base.controller';
import { SignedUrlService } from '#/core/generic/upload/signed-url.service';
import { UploadSignedUrlResponse } from '#/shared';

@Controller('private/upload-signed-url')
export class UploadSignedUrlController extends PrivateBaseController {
  public constructor(private signedUrlService: SignedUrlService) {
    super();
  }

  @Get('/image')
  @HttpCode(200)
  public async find(@Auth() authUser: AuthUser): Promise<UploadSignedUrlResponse> {
    const uploadSignedUrl = await this.signedUrlService.getImageUploadSignedUrl(authUser.houseId);

    return {
      uploadSignedUrl: uploadSignedUrl,
    };
  }
}
