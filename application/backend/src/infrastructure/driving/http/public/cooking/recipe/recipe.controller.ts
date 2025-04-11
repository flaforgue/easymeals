import { Controller, Get, HttpCode, Query } from '@nestjs/common';
import { Recipe } from '#/shared';
import { PublicBaseController } from '#/infrastructure/driving/http/public/public-base.controller';
import { ListRecipesDto } from '#/infrastructure/driving/http/public/cooking/recipe/inputs/list-recipes.dto';
import { RecipeSerializer } from '#/infrastructure/driving/http/public/cooking/recipe/outputs/recipe.serializer';
import { FindRecipeDto } from '#/infrastructure/driving/http/public/cooking/recipe/inputs/find-recipe.dto';
import { RecipeReadRepository } from '#/core/cooking/recipe/repositories/recipe.read-repository';

@Controller('public/cooking/recipe')
export class RecipeController extends PublicBaseController {
  public constructor(
    private readonly recipeReadRepository: RecipeReadRepository,
    private readonly recipeSerializer: RecipeSerializer,
  ) {
    super();
  }

  @Get('/find')
  @HttpCode(200)
  public async find(@Query() findRecipeDto: FindRecipeDto): Promise<Recipe> {
    const recipe = await this.recipeReadRepository.findById(findRecipeDto.id);

    return this.recipeSerializer.serialize(recipe);
  }

  @Get('/list')
  @HttpCode(200)
  public async list(@Query() listRecipesDto: ListRecipesDto): Promise<Recipe[]> {
    const recipes = await this.recipeReadRepository.getPublicFromFilters(listRecipesDto);

    return this.recipeSerializer.serializeMany(recipes);
  }
}
