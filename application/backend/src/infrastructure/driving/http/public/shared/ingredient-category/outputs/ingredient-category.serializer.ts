import { BaseSerializer } from '#/infrastructure/driving/http/base.serializer';
import { IngredientCategory } from '#/shared';
import { Injectable } from '@nestjs/common';
import { IngredientCategory as PrismaIngredientCategory } from '#/prisma/client';

@Injectable()
export class IngredientCategorySerializer extends BaseSerializer<PrismaIngredientCategory, IngredientCategory> {
  public serialize(ingredientCategory: PrismaIngredientCategory): IngredientCategory {
    return {
      id: ingredientCategory.id,
      name: ingredientCategory.name,
      illustrationUrl: ingredientCategory.illustrationUrl,
    };
  }
}
