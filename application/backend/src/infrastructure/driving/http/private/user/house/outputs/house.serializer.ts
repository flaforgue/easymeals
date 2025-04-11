import { BaseSerializer } from '#/infrastructure/driving/http/base.serializer';
import { Injectable } from '@nestjs/common';
import { House as PrismaHouse } from '#/prisma/client';
import { House } from '#/shared';

@Injectable()
export class HouseSerializer extends BaseSerializer<PrismaHouse, House> {
  public serialize(house: PrismaHouse): House {
    return {
      id: house.id,
      name: house.name,
    };
  }
}
