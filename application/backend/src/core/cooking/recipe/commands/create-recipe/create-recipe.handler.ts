import { CreateRecipeCommand } from '#/core/cooking/recipe/commands/create-recipe/create-recipe.command';
import { Recipe } from '#/core/cooking/recipe/entities/recipe.entity';
import { RecipeWriteRepository } from '#/core/cooking/recipe/repositories/recipe.write-repository';
import { UrlValidatorService } from '#/core/generic/upload/url-validator.service';
import { HouseReadRepository } from '#/core/user/house/repositories/house.read-repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CreateRecipeHandler {
  public constructor(
    private readonly recipeWriteRepository: RecipeWriteRepository,
    private readonly houseReadRepository: HouseReadRepository,
    private readonly urlValidatorService: UrlValidatorService,
  ) {}

  public async handle(command: CreateRecipeCommand): Promise<void> {
    if (command.illustrationUrl !== null) {
      this.urlValidatorService.validate(command.illustrationUrl);
    }

    const nbPortions = await this.houseReadRepository.findDefaultNbPortionsById(command.houseId);
    const recipe = new Recipe(
      command.id,
      command.houseId,
      command.name,
      nbPortions,
      command.preparationTimeInMinutes,
      command.totalTimeInMinutes,
      command.cuisineTypeId,
      command.isVegetarian,
      command.illustrationUrl,
    );

    return this.recipeWriteRepository.create(recipe);
  }
}
