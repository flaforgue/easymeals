import { BaseSerializer } from '#/infrastructure/driving/http/base.serializer';
import { Injectable } from '@nestjs/common';
import { RecipeIngredient, UnitCode } from '#/shared';

interface PrismaEagerLoadedRecipeIngredient {
  quantity: number;
  recipeId: string;
  ingredientId: string;
  ingredient: {
    unit: {
      id: string;
      abbreviation: string;
      name: string;
      code: string;
    };
    ingredientCategoryId: string;
    name: string;
  };
}

@Injectable()
export class RecipeIngredientSerializer extends BaseSerializer<PrismaEagerLoadedRecipeIngredient, RecipeIngredient> {
  public serialize(recipeIngredient: PrismaEagerLoadedRecipeIngredient): RecipeIngredient {
    return {
      recipeId: recipeIngredient.recipeId,
      ingredientId: recipeIngredient.ingredientId,
      ingredientName: recipeIngredient.ingredient.name,
      ingredientCategoryId: recipeIngredient.ingredient.ingredientCategoryId,
      unitId: recipeIngredient.ingredient.unit.id,
      unitAbbreviation: recipeIngredient.ingredient.unit.abbreviation,
      unitName: recipeIngredient.ingredient.unit.name,
      unitCode: recipeIngredient.ingredient.unit.code as UnitCode,
      quantity: recipeIngredient.quantity,
    };
  }
}
