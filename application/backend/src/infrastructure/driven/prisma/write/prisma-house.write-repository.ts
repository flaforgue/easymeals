import { House } from '#/core/user/house/entities/house.entity';
import { HouseWriteRepository } from '#/core/user/house/repositories/house.write-repository';
import { PrismaService } from '#/infrastructure/driven/prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaHouseWriteRepository implements HouseWriteRepository {
  public constructor(private readonly prisma: PrismaService) {}

  public async create(house: House): Promise<void> {
    await this.prisma.house.create({
      data: {
        id: house.id,
        name: house.name,
        defaultNbPortions: house.defaultNbPortions,
      },
    });
  }

  public async update(house: House): Promise<void> {
    await this.prisma.house.update({
      where: {
        id: house.id,
      },
      data: {
        name: house.name,
        defaultNbPortions: house.defaultNbPortions,
      },
    });

    return;
  }
}
