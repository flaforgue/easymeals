import { ValidationException } from '#/core/generic/validation/validation.exception';
import { UpdateIngredientCommand } from '#/core/shared/ingredient/commands/update-ingredient/update-ingredient.command';
import { Ingredient } from '#/core/shared/ingredient/entities/ingredient.entity';
import { IngredientReadRepository } from '#/core/shared/ingredient/repositories/ingredient.read-repository';
import { IngredientWriteRepository } from '#/core/shared/ingredient/repositories/ingredient.write-repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UpdateIngredientHandler {
  public constructor(
    private readonly ingredientReadRepository: IngredientReadRepository,
    private readonly ingredientWriteRepository: IngredientWriteRepository,
  ) {}

  public async handle(command: UpdateIngredientCommand): Promise<void> {
    const ingredient = new Ingredient(
      command.id,
      command.houseId,
      command.name,
      command.unitId,
      command.ingredientCategoryId,
    );
    const doesNameExistForHouse = await this.ingredientReadRepository.doesExist(ingredient);

    if (doesNameExistForHouse) {
      throw new ValidationException('Un ingrédient avec ce nom et cette unité existe déjà');
    }

    return this.ingredientWriteRepository.update(ingredient);
  }
}
