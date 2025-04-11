import { Controller, Get, HttpCode } from '@nestjs/common';
import { IngredientCategory } from '#/shared';
import { PublicBaseController } from '#/infrastructure/driving/http/public/public-base.controller';
import { IngredientCategoryReadRepository } from '#/core/shared/ingredient/repositories/ingredient-category.read-repository';
import { IngredientCategorySerializer } from '#/infrastructure/driving/http/public/shared/ingredient-category/outputs/ingredient-category.serializer';

@Controller('public/shared/ingredient-category')
export class IngredientCategoryController extends PublicBaseController {
  public constructor(
    private readonly ingredientCategoryReadRepository: IngredientCategoryReadRepository,
    private readonly ingredientCategorySerializer: IngredientCategorySerializer,
  ) {
    super();
  }

  @Get('/list')
  @HttpCode(200)
  public async list(): Promise<IngredientCategory[]> {
    const ingredientCategories = await this.ingredientCategoryReadRepository.getAll();

    return this.ingredientCategorySerializer.serializeMany(ingredientCategories);
  }
}
