import { UserWriteRepository } from '#/core/user/user/repositories/user.write-repository';
import { PrismaService } from '#/infrastructure/driven/prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaUserWriteRepository implements UserWriteRepository {
  public constructor(private readonly prisma: PrismaService) {}

  public async create(idpId: string, houseId: string): Promise<void> {
    await this.prisma.user.create({
      data: {
        idpId: idpId,
        houseId: houseId,
      },
    });

    return;
  }

  public async updateName(id: string, name: string): Promise<void> {
    await this.prisma.user.update({
      where: {
        id: id,
      },
      data: {
        name: name,
      },
    });

    return;
  }

  public async joinHouse(userId: string, houseJoinKey: string): Promise<void> {
    await this.prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        house: {
          connect: {
            joinKey: houseJoinKey,
          },
        },
      },
    });

    return;
  }
}
