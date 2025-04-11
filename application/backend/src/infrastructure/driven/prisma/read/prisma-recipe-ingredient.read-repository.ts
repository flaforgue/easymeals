import { RecipeIngredient } from '#/core/cooking/recipe/entities/recipe-ingredient.entity';
import {
  PrismaRecipeIngredient,
  RecipeIngredientReadRepository,
} from '#/core/cooking/recipe/repositories/recipe-ingredient.read-repository';
import { PrismaService } from '#/infrastructure/driven/prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaRecipeIngredientReadRepository implements RecipeIngredientReadRepository {
  public constructor(private readonly prisma: PrismaService) {}

  public getByRecipeId(recipeId: string): Promise<PrismaRecipeIngredient[]> {
    return this.prisma.recipeIngredientPivot.findMany({
      select: {
        quantity: true,
        recipeId: true,
        ingredientId: true,
        ingredient: {
          select: {
            id: true,
            name: true,
            houseId: true,
            ingredientCategoryId: true,
            unit: {
              select: {
                id: true,
                abbreviation: true,
                name: true,
                code: true,
              },
            },
          },
        },
      },
      where: {
        recipe: {
          id: recipeId,
        },
      },
    });
  }

  public async findEntityById(id: {
    ingredientId: string;
    recipeId: string;
    houseId: string;
  }): Promise<RecipeIngredient> {
    const prismaRecipeIngredient = await this.prisma.recipeIngredientPivot.findUniqueOrThrow({
      where: {
        recipeId_ingredientId: {
          ingredientId: id.ingredientId,
          recipeId: id.recipeId,
        },
        recipe: {
          houseId: id.houseId,
        },
      },
    });

    return new RecipeIngredient(
      prismaRecipeIngredient.ingredientId,
      prismaRecipeIngredient.quantity,
      prismaRecipeIngredient.recipeId,
      id.houseId,
    );
  }
}
