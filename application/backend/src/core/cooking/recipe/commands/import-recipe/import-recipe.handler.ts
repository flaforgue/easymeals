import { ImportRecipeCommand } from '#/core/cooking/recipe/commands/import-recipe/import-recipe.command';
import { Recipe } from '#/core/cooking/recipe/entities/recipe.entity';
import { RecipeReadRepository } from '#/core/cooking/recipe/repositories/recipe.read-repository';
import { RecipeWriteRepository } from '#/core/cooking/recipe/repositories/recipe.write-repository';
import { Injectable } from '@nestjs/common';
import { RecipeIngredientReadRepository } from '#/core/cooking/recipe/repositories/recipe-ingredient.read-repository';
import { RecipeIngredientWriteRepository } from '#/core/cooking/recipe/repositories/recipe-ingredient.write-repository';
import { RecipeInstructionReadRepository } from '#/core/cooking/recipe/repositories/recipe-instruction.read-repository';
import { RecipeInstructionWriteRepository } from '#/core/cooking/recipe/repositories/recipe-instruction.write-repository';
import { uuidv4 } from '#/shared';
import { RecipeInstruction } from '#/core/cooking/recipe/entities/recipe-instruction.entity';
import { RecipeIngredient } from '#/core/cooking/recipe/entities/recipe-ingredient.entity';
import { ValidationException } from '#/core/generic/validation/validation.exception';
import { IngredientWriteRepository } from '#/core/shared/ingredient/repositories/ingredient.write-repository';
import { Ingredient } from '#/core/shared/ingredient/entities/ingredient.entity';
import { IngredientReadRepository } from '#/core/shared/ingredient/repositories/ingredient.read-repository';

@Injectable()
export class ImportRecipeHandler {
  public constructor(
    private readonly ingredientReadRepository: IngredientReadRepository,
    private readonly ingredientWriteRepository: IngredientWriteRepository,
    private readonly recipeReadRepository: RecipeReadRepository,
    private readonly recipeWriteRepository: RecipeWriteRepository,
    private readonly recipeIngredientReadRepository: RecipeIngredientReadRepository,
    private readonly recipeIngredientWriteRepository: RecipeIngredientWriteRepository,
    private readonly recipeInstructionReadRepository: RecipeInstructionReadRepository,
    private readonly recipeInstructionWriteRepository: RecipeInstructionWriteRepository,
  ) {}

  public async handle(command: ImportRecipeCommand): Promise<void> {
    const recipeToImport = await this.recipeReadRepository.findById(command.recipeToImportId);
    if (recipeToImport.houseId === command.destinationHouseId) {
      throw new ValidationException('La recette se trouve déjà dans vos recettes personnelles');
    }

    const recipe = new Recipe(
      command.recipeToCreateId,
      command.destinationHouseId,
      recipeToImport.name,
      recipeToImport.nbPortions,
      recipeToImport.preparationTimeInMinutes,
      recipeToImport.totalTimeInMinutes,
      recipeToImport.cuisineTypeId,
      recipeToImport.isVegetarian,
      recipeToImport.illustrationUrl,
    );

    await this.recipeWriteRepository.create(recipe);
    await Promise.all([
      this.copyIngredients(command.recipeToImportId, command.recipeToCreateId, command.destinationHouseId),
      this.copyInstructions(command.recipeToImportId, command.recipeToCreateId, command.destinationHouseId),
    ]);

    return;
  }

  private async copyIngredients(fromRecipeId: string, toRecipeId: string, toHouseId: string): Promise<void> {
    const foreignRecipeIngredients = await this.recipeIngredientReadRepository.getByRecipeId(fromRecipeId);
    const foreignIngredients = foreignRecipeIngredients
      .filter((recipeIngredient) => recipeIngredient.ingredient.houseId !== null)
      .map((recipeIngredient) => recipeIngredient.ingredient);
    const localIngredients = await this.ingredientReadRepository.getCustomByNames(
      toHouseId,
      foreignIngredients.map((i) => i.name),
    );

    const localIngredientsToCreate: Ingredient[] = [];
    const recipeIngredientsToCreate = foreignRecipeIngredients.map((foreignRecipeIngredient) => {
      const ingredient = foreignRecipeIngredient.ingredient;
      if (ingredient.houseId === null) {
        return new RecipeIngredient(ingredient.id, foreignRecipeIngredient.quantity, toRecipeId, toHouseId);
      }

      const localIngredient = localIngredients.find(
        (localIngredient) => localIngredient.name === ingredient.name && localIngredient.unitId === ingredient.unit.id,
      );
      if (localIngredient !== undefined) {
        return new RecipeIngredient(localIngredient.id, foreignRecipeIngredient.quantity, toRecipeId, toHouseId);
      }

      const localIngredientToCreate = new Ingredient(
        uuidv4(),
        toHouseId,
        ingredient.name,
        ingredient.unit.id,
        ingredient.ingredientCategoryId,
      );
      localIngredientsToCreate.push(localIngredientToCreate);

      return new RecipeIngredient(localIngredientToCreate.id, foreignRecipeIngredient.quantity, toRecipeId, toHouseId);
    });

    if (localIngredientsToCreate.length > 0) {
      await this.ingredientWriteRepository.createMany(localIngredientsToCreate);
    }

    return this.recipeIngredientWriteRepository.createMany(recipeIngredientsToCreate);
  }

  private async copyInstructions(fromRecipeId: string, toRecipeId: string, toHouseId: string): Promise<void> {
    const instructionsToCopy = await this.recipeInstructionReadRepository.getByRecipeId(fromRecipeId);
    const instructionsToCreate = instructionsToCopy.map(
      (instructionToCopy) =>
        new RecipeInstruction(
          uuidv4(),
          toRecipeId,
          toHouseId,
          instructionToCopy.order,
          instructionToCopy.text,
          instructionToCopy.timerNbMinutes,
        ),
    );

    return this.recipeInstructionWriteRepository.createMany(instructionsToCreate);
  }
}
