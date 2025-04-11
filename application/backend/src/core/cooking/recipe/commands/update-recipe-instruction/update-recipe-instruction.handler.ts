import { UpdateRecipeInstructionCommand } from '#/core/cooking/recipe/commands/update-recipe-instruction/update-recipe-instruction.command';
import { RecipeInstructionReadRepository } from '#/core/cooking/recipe/repositories/recipe-instruction.read-repository';
import { RecipeInstructionWriteRepository } from '#/core/cooking/recipe/repositories/recipe-instruction.write-repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UpdateRecipeInstructionHandler {
  public constructor(
    private readonly recipeInstructionReadRepository: RecipeInstructionReadRepository,
    private readonly recipeInstructionWriteRepository: RecipeInstructionWriteRepository,
  ) {}

  public async handle(command: UpdateRecipeInstructionCommand): Promise<void> {
    const recipeInstruction = await this.recipeInstructionReadRepository.findEntityById({
      id: command.id,
      houseId: command.houseId,
    });

    recipeInstruction.text = command.text;
    recipeInstruction.timerNbMinutes = command.timerNbMinutes;

    return this.recipeInstructionWriteRepository.updateInfos(recipeInstruction);
  }
}
