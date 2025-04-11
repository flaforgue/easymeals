import { CuisineTypeReadRepository } from '#/core/cooking/cuisine-type/repositories/cuisine-type.read-repository';
import { PrismaService } from '#/infrastructure/driven/prisma/prisma.service';
import { CuisineType } from '#/prisma/client';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaCuisineTypeReadRepository implements CuisineTypeReadRepository {
  public constructor(private readonly prisma: PrismaService) {}

  public getAll(): Promise<CuisineType[]> {
    return this.prisma.cuisineType.findMany({
      orderBy: {
        name: 'asc',
      },
    });
  }
}
