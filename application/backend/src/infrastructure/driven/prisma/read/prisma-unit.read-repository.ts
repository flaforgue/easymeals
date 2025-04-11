import { UnitReadRepository } from '#/core/shared/units/repositories/unit.read-repository';
import { PrismaService } from '#/infrastructure/driven/prisma/prisma.service';
import { Unit } from '#/prisma/client';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaUnitReadRepository implements UnitReadRepository {
  public constructor(private readonly prisma: PrismaService) {}

  public getAll(): Promise<Unit[]> {
    return this.prisma.unit.findMany({
      orderBy: {
        name: 'asc',
      },
    });
  }
}
