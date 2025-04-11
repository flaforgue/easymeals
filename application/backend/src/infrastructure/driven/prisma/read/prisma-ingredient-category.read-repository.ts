import { IngredientCategoryReadRepository } from '#/core/shared/ingredient/repositories/ingredient-category.read-repository';
import { PrismaService } from '#/infrastructure/driven/prisma/prisma.service';
import { IngredientCategory } from '#/prisma/client';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaIngredientCategoryReadRepository implements IngredientCategoryReadRepository {
  public constructor(private readonly prisma: PrismaService) {}

  public getAll(): Promise<IngredientCategory[]> {
    return this.prisma.ingredientCategory.findMany({
      orderBy: {
        name: 'asc',
      },
    });
  }
}
