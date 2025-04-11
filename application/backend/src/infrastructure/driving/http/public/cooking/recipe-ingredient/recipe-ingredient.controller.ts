import { Controller, Get, HttpCode, Query } from '@nestjs/common';
import { RecipeIngredient } from '#/shared';
import { PublicBaseController } from '#/infrastructure/driving/http/public/public-base.controller';
import { RecipeIngredientSerializer as RecipeIngredientSerializer } from '#/infrastructure/driving/http/public/cooking/recipe-ingredient/outputs/recipe-ingredient.serializer';
import { ListRecipeIngredientsDto } from '#/infrastructure/driving/http/public/cooking/recipe-ingredient/inputs/list-recipe-ingredients.dto';
import { RecipeIngredientReadRepository } from '#/core/cooking/recipe/repositories/recipe-ingredient.read-repository';

@Controller('public/cooking/recipe-ingredient')
export class RecipeIngredientController extends PublicBaseController {
  public constructor(
    private readonly recipeIngredientReadRepository: RecipeIngredientReadRepository,
    private readonly recipeIngredientSerializer: RecipeIngredientSerializer,
  ) {
    super();
  }

  @Get('/list')
  @HttpCode(200)
  public async list(@Query() listRecipeIngredientsDto: ListRecipeIngredientsDto): Promise<RecipeIngredient[]> {
    const recipeIngredients = await this.recipeIngredientReadRepository.getByRecipeId(
      listRecipeIngredientsDto.recipeId,
    );

    return this.recipeIngredientSerializer.serializeMany(recipeIngredients);
  }
}
