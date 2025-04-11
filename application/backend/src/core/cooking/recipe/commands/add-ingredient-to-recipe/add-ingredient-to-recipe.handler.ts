import { AddIngredientToRecipeCommand } from '#/core/cooking/recipe/commands/add-ingredient-to-recipe/add-ingredient-to-recipe.command';
import { RecipeIngredient } from '#/core/cooking/recipe/entities/recipe-ingredient.entity';
import { RecipeIngredientWriteRepository } from '#/core/cooking/recipe/repositories/recipe-ingredient.write-repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AddIngredientToRecipeHandler {
  public constructor(private readonly recipeIngredientWriteRepository: RecipeIngredientWriteRepository) {}

  public async handle(command: AddIngredientToRecipeCommand): Promise<void> {
    const recipeIngredient = new RecipeIngredient(
      command.ingredientId,
      command.quantity,
      command.recipeId,
      command.houseId,
    );

    await this.recipeIngredientWriteRepository.addIngredientToRecipe(recipeIngredient);

    return;
  }
}
