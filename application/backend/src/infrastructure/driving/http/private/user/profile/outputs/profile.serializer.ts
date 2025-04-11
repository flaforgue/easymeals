import { BaseSerializer } from '#/infrastructure/driving/http/base.serializer';
import { Profile } from '#/shared';
import { Injectable } from '@nestjs/common';
import { User as PrismaUser } from '#/prisma/client';

@Injectable()
export class ProfileSerializer extends BaseSerializer<PrismaUser, Profile> {
  public serialize(user: PrismaUser): Profile {
    return {
      id: user.id,
      name: user.name,
      createdAt: user.createdAt.getTime(),
      houseId: user.houseId,
    };
  }
}
