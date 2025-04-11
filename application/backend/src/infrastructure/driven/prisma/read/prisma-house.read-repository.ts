import { House } from '#/core/user/house/entities/house.entity';
import { HouseReadRepository } from '#/core/user/house/repositories/house.read-repository';
import { PrismaService } from '#/infrastructure/driven/prisma/prisma.service';
import { House as PrismaHouse } from '#/prisma/client';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaHouseReadRepository implements HouseReadRepository {
  public constructor(private readonly prisma: PrismaService) {}

  public findByJoinKey(joinKey: string): Promise<PrismaHouse> {
    return this.prisma.house.findUniqueOrThrow({
      where: {
        joinKey: joinKey,
      },
    });
  }

  public findByIdWithUsers(id: string) {
    return this.prisma.house.findUniqueOrThrow({
      select: {
        id: true,
        name: true,
        joinKey: true,
        defaultNbPortions: true,
        users: {
          select: {
            name: true,
            id: true,
          },
          orderBy: {
            createdAt: 'asc',
          },
        },
      },
      where: {
        id: id,
      },
    });
  }

  public async findEntityById(id: string): Promise<House> {
    const prismaHouse = await this.prisma.house.findUniqueOrThrow({
      where: {
        id: id,
      },
    });

    return new House(prismaHouse.id, prismaHouse.name, prismaHouse.defaultNbPortions);
  }

  public async findDefaultNbPortionsById(houseId: string): Promise<number> {
    const prismaHouse = await this.prisma.house.findUniqueOrThrow({
      where: {
        id: houseId,
      },
    });
    console.log('prismaHouse', prismaHouse);

    return prismaHouse.defaultNbPortions;
  }
}
