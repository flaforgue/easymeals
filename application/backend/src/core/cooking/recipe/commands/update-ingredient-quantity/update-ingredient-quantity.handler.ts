import { UpdateIngredientQuantityCommand } from '#/core/cooking/recipe/commands/update-ingredient-quantity/update-ingredient-quantity.command';
import { RecipeIngredientReadRepository } from '#/core/cooking/recipe/repositories/recipe-ingredient.read-repository';
import { RecipeIngredientWriteRepository } from '#/core/cooking/recipe/repositories/recipe-ingredient.write-repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UpdateIngredientQuantityHandler {
  public constructor(
    private readonly recipeIngredientReadRepository: RecipeIngredientReadRepository,
    private readonly recipeIngredientWriteRepository: RecipeIngredientWriteRepository,
  ) {}

  public async handle(command: UpdateIngredientQuantityCommand): Promise<void> {
    const recipeIngredient = await this.recipeIngredientReadRepository.findEntityById({
      ingredientId: command.ingredientId,
      recipeId: command.recipeId,
      houseId: command.houseId,
    });

    recipeIngredient.quantity = command.quantity;

    await this.recipeIngredientWriteRepository.updateQuantity(recipeIngredient);

    return;
  }
}
