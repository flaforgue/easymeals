import { BaseSerializer } from '#/infrastructure/driving/http/base.serializer';
import { UserHouse } from '#/shared';
import { Injectable } from '@nestjs/common';

interface PrismaEagerLoadedHouse {
  id: string;
  joinKey: string;
  name: string;
  defaultNbPortions: number;
  users: {
    name: null | string;
    id: string;
  }[];
}

@Injectable()
export class UserHouseSerializer extends BaseSerializer<PrismaEagerLoadedHouse, UserHouse> {
  public serialize(house: PrismaEagerLoadedHouse): UserHouse {
    return {
      id: house.id,
      joinKey: house.joinKey,
      name: house.name,
      defaultNbPortions: house.defaultNbPortions,
      users: house.users,
    };
  }
}
