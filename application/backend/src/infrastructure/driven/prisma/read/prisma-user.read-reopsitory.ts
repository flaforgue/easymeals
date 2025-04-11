import { UserReadRepository } from '#/core/user/user/repositories/user.read-repository';
import { PrismaService } from '#/infrastructure/driven/prisma/prisma.service';
import { User } from '#/prisma/client';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaUserReadRepository implements UserReadRepository {
  public constructor(private readonly prisma: PrismaService) {}

  public findOrNullByIdpId(idpId: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: {
        idpId: idpId,
      },
    });
  }

  public findById(id: string): Promise<User> {
    return this.prisma.user.findUniqueOrThrow({
      where: {
        id: id,
      },
    });
  }
}
