import { UpdateRecipeCommand } from '#/core/cooking/recipe/commands/update-recipe/update-recipe.command';
import { RecipeReadRepository } from '#/core/cooking/recipe/repositories/recipe.read-repository';
import { RecipeWriteRepository } from '#/core/cooking/recipe/repositories/recipe.write-repository';
import { UrlValidatorService } from '#/core/generic/upload/url-validator.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UpdateRecipeHandler {
  public constructor(
    private readonly recipeReadRepository: RecipeReadRepository,
    private readonly recipeWriteRepository: RecipeWriteRepository,
    private readonly urlValidatorService: UrlValidatorService,
  ) {}

  public async handle(command: UpdateRecipeCommand): Promise<void> {
    if (command.illustrationUrl !== null) {
      this.urlValidatorService.validate(command.illustrationUrl);
    }

    const recipe = await this.recipeReadRepository.findEntityById({
      id: command.id,
      houseId: command.houseId,
    });

    recipe.name = command.name;
    recipe.preparationTimeInMinutes = command.preparationTimeInMinutes;
    recipe.totalTimeInMinutes = command.totalTimeInMinutes;
    recipe.cuisineTypeId = command.cuisineTypeId;
    recipe.isVegetarian = command.isVegetarian;
    recipe.illustrationUrl = command.illustrationUrl;

    return this.recipeWriteRepository.update(recipe);
  }
}
