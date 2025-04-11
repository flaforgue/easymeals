import { BaseSerializer } from '#/infrastructure/driving/http/base.serializer';
import { Injectable } from '@nestjs/common';
import { Recipe as PrismaRecipe } from '#/prisma/client';
import { Recipe } from '#/shared';

@Injectable()
export class RecipeSerializer extends BaseSerializer<PrismaRecipe, Recipe> {
  public serialize(recipe: PrismaRecipe): Recipe {
    return {
      id: recipe.id,
      name: recipe.name,
      nbPortions: recipe.nbPortions,
      illustrationUrl: recipe.illustrationUrl,
      preparationTimeInMinutes: recipe.preparationTimeInMinutes,
      totalTimeInMinutes: recipe.totalTimeInMinutes,
      isVegetarian: recipe.isVegetarian,
      cuisineTypeId: recipe.cuisineTypeId,
      houseId: recipe.houseId,
    };
  }
}
