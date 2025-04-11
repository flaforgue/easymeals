import { ValidationException } from '#/core/generic/validation/validation.exception';
import { CreateIngredientCommand } from '#/core/shared/ingredient/commands/create-ingredient/create-ingredient.command';
import { Ingredient } from '#/core/shared/ingredient/entities/ingredient.entity';
import { IngredientReadRepository } from '#/core/shared/ingredient/repositories/ingredient.read-repository';
import { IngredientWriteRepository } from '#/core/shared/ingredient/repositories/ingredient.write-repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CreateIngredientHandler {
  public constructor(
    private readonly ingredientReadRepository: IngredientReadRepository,
    private readonly ingredientWriteRepository: IngredientWriteRepository,
  ) {}

  public async handle(command: CreateIngredientCommand): Promise<void> {
    const ingredient = new Ingredient(
      command.id,
      command.houseId,
      command.name,
      command.unitId,
      command.ingredientCategoryId,
    );
    const doesNameExistForHouse = await this.ingredientReadRepository.doesExist(ingredient);

    if (doesNameExistForHouse) {
      throw new ValidationException('Cet ingrédient avec ce nom et cette unité existe déjà');
    }

    return this.ingredientWriteRepository.create(ingredient);
  }
}
