import { RecipeIngredient } from '#/core/cooking/recipe/entities/recipe-ingredient.entity';
import { RecipeIngredientWriteRepository } from '#/core/cooking/recipe/repositories/recipe-ingredient.write-repository';
import { PrismaService } from '#/infrastructure/driven/prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaRecipeIngredientWriteRepository implements RecipeIngredientWriteRepository {
  public constructor(private readonly prisma: PrismaService) {}

  public async createMany(recipeIngredients: RecipeIngredient[]): Promise<void> {
    await this.prisma.recipeIngredientPivot.createMany({
      data: recipeIngredients.map((recipeIngredient) => {
        return {
          recipeId: recipeIngredient.recipeId,
          ingredientId: recipeIngredient.ingredientId,
          quantity: recipeIngredient.quantity,
        };
      }),
    });

    return;
  }

  public async addIngredientToRecipe(recipeIngredient: RecipeIngredient): Promise<void> {
    await this.prisma.recipeIngredientPivot.upsert({
      where: {
        recipeId_ingredientId: {
          recipeId: recipeIngredient.recipeId,
          ingredientId: recipeIngredient.ingredientId,
        },
        recipe: {
          houseId: recipeIngredient.houseId,
        },
      },
      create: {
        quantity: recipeIngredient.quantity,
        ingredient: {
          connect: {
            id: recipeIngredient.ingredientId,
            OR: [{ houseId: null }, { houseId: recipeIngredient.houseId }],
          },
        },
        recipe: {
          connect: {
            id: recipeIngredient.recipeId,
            houseId: recipeIngredient.houseId,
          },
        },
      },
      update: {
        quantity: {
          increment: recipeIngredient.quantity,
        },
      },
    });

    return;
  }

  public async updateQuantity(recipeIngredient: RecipeIngredient): Promise<void> {
    await this.prisma.recipeIngredientPivot.update({
      where: {
        recipeId_ingredientId: {
          recipeId: recipeIngredient.recipeId,
          ingredientId: recipeIngredient.ingredientId,
        },
        recipe: {
          houseId: recipeIngredient.houseId,
        },
      },
      data: {
        quantity: recipeIngredient.quantity,
      },
    });

    return;
  }

  public async delete(id: { recipeId: string; ingredientId: string; houseId: string }): Promise<void> {
    await this.prisma.recipeIngredientPivot.delete({
      where: {
        recipeId_ingredientId: {
          recipeId: id.recipeId,
          ingredientId: id.ingredientId,
        },
        recipe: {
          houseId: id.houseId,
        },
      },
    });

    return;
  }
}
