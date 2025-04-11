import { CreateRecipeInstructionCommand } from '#/core/cooking/recipe/commands/create-recipe-instruction/create-recipe-instruction.command';
import { RecipeInstruction } from '#/core/cooking/recipe/entities/recipe-instruction.entity';
import { RecipeInstructionReadRepository } from '#/core/cooking/recipe/repositories/recipe-instruction.read-repository';
import { RecipeInstructionWriteRepository } from '#/core/cooking/recipe/repositories/recipe-instruction.write-repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CreateRecipeInstructionHandler {
  public constructor(
    private readonly recipeInstructionReadRepository: RecipeInstructionReadRepository,
    private readonly recipeInstructionWriteRepository: RecipeInstructionWriteRepository,
  ) {}

  public async handle(command: CreateRecipeInstructionCommand): Promise<void> {
    const nbExistingInstructions = await this.recipeInstructionReadRepository.countByRecipeId(command.recipeId);
    const order = Math.min(nbExistingInstructions, command.order);
    const recipeInstruction = new RecipeInstruction(
      command.id,
      command.recipeId,
      command.houseId,
      order,
      command.text,
      command.timerNbMinutes,
    );

    const lastExistingOrder = nbExistingInstructions - 1;
    if (recipeInstruction.order <= lastExistingOrder) {
      await this.recipeInstructionWriteRepository.incrementOrdersFrom(
        {
          recipeId: recipeInstruction.recipeId,
          houseId: recipeInstruction.houseId,
        },
        order,
      );
    }

    return this.recipeInstructionWriteRepository.create(recipeInstruction);
  }
}
