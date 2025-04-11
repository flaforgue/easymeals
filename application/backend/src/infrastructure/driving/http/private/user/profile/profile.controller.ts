import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { Profile } from '#/shared';
import { Auth } from '#/infrastructure/driving/http/shared/auth/auth.decorator';
import { ProfileSerializer } from '#/infrastructure/driving/http/private/user/profile/outputs/profile.serializer';
import { UpdateProfileDto } from '#/infrastructure/driving/http/private/user/profile/inputs/update-profile.dto';
import { AuthUser } from '#/core/generic/auth/auth-user.interface';
import { UserReadRepository } from '#/core/user/user/repositories/user.read-repository';
import { UserWriteRepository } from '#/core/user/user/repositories/user.write-repository';
import { PrivateBaseController } from '#/infrastructure/driving/http/private/private-base.controller';

@Controller('private/user/profile')
export class ProfileController extends PrivateBaseController {
  public constructor(
    private userReadRepository: UserReadRepository,
    private userWriteRepository: UserWriteRepository,
    private profileSerializer: ProfileSerializer,
  ) {
    super();
  }

  @Get('/find')
  @HttpCode(200)
  public async find(@Auth() authUser: AuthUser): Promise<Profile> {
    const user = await this.userReadRepository.findById(authUser.id);

    return this.profileSerializer.serialize(user);
  }

  @Post('/update')
  @HttpCode(204)
  public update(@Auth() authUser: AuthUser, @Body() updateProfileDto: UpdateProfileDto): Promise<void> {
    return this.userWriteRepository.updateName(authUser.id, updateProfileDto.name);
  }
}
