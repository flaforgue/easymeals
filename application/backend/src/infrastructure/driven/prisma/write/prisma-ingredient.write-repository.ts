import { Ingredient } from '#/core/shared/ingredient/entities/ingredient.entity';
import { IngredientWriteRepository } from '#/core/shared/ingredient/repositories/ingredient.write-repository';
import { PrismaService } from '#/infrastructure/driven/prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaIngredientWriteRepository implements IngredientWriteRepository {
  public constructor(private readonly prisma: PrismaService) {}

  public async create(ingredient: Ingredient): Promise<void> {
    await this.prisma.ingredient.create({
      data: {
        id: ingredient.id,
        houseId: ingredient.houseId,
        unitId: ingredient.unitId,
        ingredientCategoryId: ingredient.ingredientCategoryId,
        name: ingredient.name,
      },
    });

    return;
  }

  public async createMany(ingredients: Ingredient[]): Promise<void> {
    await this.prisma.ingredient.createMany({
      data: ingredients.map((ingredient) => ({
        id: ingredient.id,
        houseId: ingredient.houseId,
        unitId: ingredient.unitId,
        ingredientCategoryId: ingredient.ingredientCategoryId,
        name: ingredient.name,
      })),
    });

    return;
  }

  public async delete(id: { houseId: string; ingredientId: string }): Promise<void> {
    await this.prisma.ingredient.delete({
      where: {
        id: id.ingredientId,
        houseId: id.houseId,
      },
    });

    return;
  }

  public async update(ingredient: Ingredient): Promise<void> {
    await this.prisma.ingredient.update({
      where: {
        id: ingredient.id,
        houseId: ingredient.houseId,
      },
      data: {
        unitId: ingredient.unitId,
        ingredientCategoryId: ingredient.ingredientCategoryId,
        name: ingredient.name,
      },
    });

    return;
  }
}
