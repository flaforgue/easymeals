import { Ingredient } from '#/core/shared/ingredient/entities/ingredient.entity';
import {
  IngredientReadRepository,
  IngredientWithUnit,
} from '#/core/shared/ingredient/repositories/ingredient.read-repository';
import { PrismaService } from '#/infrastructure/driven/prisma/prisma.service';
import { Ingredient as PrismaIngredient } from '#/prisma/client';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaIngredientReadRepository implements IngredientReadRepository {
  public constructor(private readonly prisma: PrismaService) {}

  public getFromFilters(filters: {
    houseId: string;
    onlyUserContent: boolean;
    ingredientCategoryId: string | null;
    unitId: string | null;
    search: string;
  }): Promise<IngredientWithUnit[]> {
    return this.prisma.ingredient.findMany({
      select: {
        id: true,
        name: true,
        unit: {
          select: {
            id: true,
            name: true,
            abbreviation: true,
          },
        },
        isStoredInQuantity: true,
        ingredientCategoryId: true,
        houseId: true,
      },
      where: {
        ...(filters.onlyUserContent === false ? {} : { houseId: filters.houseId }),
        ...(filters.ingredientCategoryId === null ? {} : { ingredientCategoryId: filters.ingredientCategoryId }),
        ...(filters.unitId === null ? {} : { unitId: filters.unitId }),
        ...(filters.search === ''
          ? {}
          : {
              name: {
                contains: filters.search,
                mode: 'insensitive',
              },
            }),
        OR: [{ houseId: null }, { houseId: filters.houseId }],
      },
      orderBy: [
        {
          ingredientCategoryId: 'asc',
        },
        {
          name: 'asc',
        },
      ],
    });
  }

  public async doesExist(ingredient: Ingredient): Promise<boolean> {
    const nbFoundIngredients = await this.prisma.ingredient.count({
      where: {
        name: ingredient.name,
        unitId: ingredient.unitId,
        OR: [{ houseId: null }, { houseId: ingredient.houseId }],
        id: {
          not: ingredient.id,
        },
      },
    });

    return nbFoundIngredients > 0;
  }

  public getCustomByNames(houseId: string, names: string[]): Promise<PrismaIngredient[]> {
    return this.prisma.ingredient.findMany({
      where: {
        name: {
          in: names,
        },
        houseId: houseId,
      },
    });
  }
}
