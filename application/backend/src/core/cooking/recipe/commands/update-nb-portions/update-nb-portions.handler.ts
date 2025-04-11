import { UpdateNbPortionsCommand } from '#/core/cooking/recipe/commands/update-nb-portions/update-nb-portions.command';
import { RecipeReadRepository } from '#/core/cooking/recipe/repositories/recipe.read-repository';
import { RecipeWriteRepository } from '#/core/cooking/recipe/repositories/recipe.write-repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UpdateNbPortionsHandler {
  public constructor(
    private readonly recipeReadRepository: RecipeReadRepository,
    private readonly recipeWriteRepository: RecipeWriteRepository,
  ) {}

  public async handle(command: UpdateNbPortionsCommand): Promise<void> {
    const recipe = await this.recipeReadRepository.findEntityById({
      id: command.id,
      houseId: command.houseId,
    });

    recipe.nbPortions = command.nbPortions;

    return this.recipeWriteRepository.updateNbPortions(recipe);
  }
}
