import { HouseReadRepository } from '#/core/user/house/repositories/house.read-repository';
import { HouseWriteRepository } from '#/core/user/house/repositories/house.write-repository';
import { CreateUserCommandHandler } from '#/core/user/user/commands/create-user/create-user.handler';
import { UserReadRepository } from '#/core/user/user/repositories/user.read-repository';
import { UserWriteRepository } from '#/core/user/user/repositories/user.write-repository';
import { ProfileSerializer } from '#/infrastructure/driving/http/private/user/profile/outputs/profile.serializer';
import { ProfileController } from '#/infrastructure/driving/http/private/user/profile/profile.controller';
import { HouseController } from '#/infrastructure/driving/http/private/user/house/house.controller';
import { HouseSerializer } from '#/infrastructure/driving/http/private/user/house/outputs/house.serializer';
import { UserHouseSerializer } from '#/infrastructure/driving/http/private/user/house/outputs/user-house.serializer';
import { PrismaModule } from '#/infrastructure/driving/modules/prisma.module';
import { PrismaHouseReadRepository } from '#/infrastructure/driven/prisma/read/prisma-house.read-repository';
import { PrismaUserReadRepository } from '#/infrastructure/driven/prisma/read/prisma-user.read-reopsitory';
import { PrismaHouseWriteRepository } from '#/infrastructure/driven/prisma/write/prisma-house.write-repository';
import { PrismaUserWriteRepository } from '#/infrastructure/driven/prisma/write/prisma-user.write-repository';
import { Module } from '@nestjs/common';
import { UpdateHouseInfosHandler } from '#/core/user/house/commands/update-house-infos/update-house-infos.handler';

@Module({
  imports: [PrismaModule],
  exports: [CreateUserCommandHandler, HouseReadRepository, UserReadRepository],
  controllers: [ProfileController, HouseController],
  providers: [
    UpdateHouseInfosHandler,
    {
      provide: HouseReadRepository,
      useClass: PrismaHouseReadRepository,
    },
    {
      provide: HouseWriteRepository,
      useClass: PrismaHouseWriteRepository,
    },
    {
      provide: UserReadRepository,
      useClass: PrismaUserReadRepository,
    },
    {
      provide: UserWriteRepository,
      useClass: PrismaUserWriteRepository,
    },
    ProfileSerializer,
    HouseSerializer,
    UserHouseSerializer,
    CreateUserCommandHandler,
  ],
})
export class UserModule {}
