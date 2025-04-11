import { Recipe } from '#/core/cooking/recipe/entities/recipe.entity';
import { RecipeWriteRepository } from '#/core/cooking/recipe/repositories/recipe.write-repository';
import { PrismaService } from '#/infrastructure/driven/prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaRecipeWriteRepository implements RecipeWriteRepository {
  public constructor(private readonly prisma: PrismaService) {}

  public async create(recipe: Recipe): Promise<void> {
    await this.prisma.recipe.create({
      data: {
        id: recipe.id,
        houseId: recipe.houseId,
        name: recipe.name,
        illustrationUrl: recipe.illustrationUrl,
        preparationTimeInMinutes: recipe.preparationTimeInMinutes,
        totalTimeInMinutes: recipe.totalTimeInMinutes,
        isVegetarian: recipe.isVegetarian,
        cuisineTypeId: recipe.cuisineTypeId,
        nbPortions: recipe.nbPortions,
      },
    });

    return;
  }

  public async update(recipe: Recipe): Promise<void> {
    await this.prisma.recipe.update({
      where: {
        id: recipe.id,
        houseId: recipe.houseId,
      },
      data: {
        name: recipe.name,
        illustrationUrl: recipe.illustrationUrl,
        preparationTimeInMinutes: recipe.preparationTimeInMinutes,
        totalTimeInMinutes: recipe.totalTimeInMinutes,
        isVegetarian: recipe.isVegetarian,
        cuisineTypeId: recipe.cuisineTypeId,
      },
    });

    return;
  }

  public async updateNbPortions(recipe: Recipe): Promise<void> {
    await this.prisma.recipe.update({
      where: {
        id: recipe.id,
        houseId: recipe.houseId,
      },
      data: {
        nbPortions: recipe.nbPortions,
      },
    });

    return;
  }

  public async delete(id: { recipeId: string; houseId: string }): Promise<void> {
    await this.prisma.recipe.delete({
      where: {
        id: id.recipeId,
        houseId: id.houseId,
      },
    });

    return;
  }
}
