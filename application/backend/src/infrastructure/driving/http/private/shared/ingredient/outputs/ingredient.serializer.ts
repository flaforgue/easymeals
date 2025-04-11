import { BaseSerializer } from '#/infrastructure/driving/http/base.serializer';
import { Ingredient } from '#/shared';
import { Injectable } from '@nestjs/common';
import { IngredientWithUnit } from '#/core/shared/ingredient/repositories/ingredient.read-repository';

@Injectable()
export class IngredientSerializer extends BaseSerializer<IngredientWithUnit, Ingredient> {
  public serialize(ingredient: IngredientWithUnit): Ingredient {
    return {
      id: ingredient.id,
      name: ingredient.name,
      unit: {
        id: ingredient.unit.id,
        name: ingredient.unit.name,
        abbreviation: ingredient.unit.abbreviation,
      },
      ingredientCategoryId: ingredient.ingredientCategoryId,
      isUserContent: ingredient.houseId !== null,
    };
  }
}
