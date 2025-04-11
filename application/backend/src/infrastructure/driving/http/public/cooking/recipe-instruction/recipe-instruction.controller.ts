import { Controller, Get, HttpCode, Query } from '@nestjs/common';
import { RecipeInstruction } from '#/shared';
import { PublicBaseController } from '#/infrastructure/driving/http/public/public-base.controller';
import { RecipeInstructionSerializer } from '#/infrastructure/driving/http/public/cooking/recipe-instruction/outputs/recipe-instruction.serializer';
import { ListRecipeInstructionsDto } from '#/infrastructure/driving/http/public/cooking/recipe-instruction/inputs/list-recipe-instructions.dto';
import { RecipeInstructionReadRepository } from '#/core/cooking/recipe/repositories/recipe-instruction.read-repository';

@Controller('public/cooking/recipe-instruction')
export class RecipeInstructionController extends PublicBaseController {
  public constructor(
    private readonly recipeInstructionReadRepository: RecipeInstructionReadRepository,
    private readonly recipeInstructionSerializer: RecipeInstructionSerializer,
  ) {
    super();
  }

  @Get('/list')
  @HttpCode(200)
  public async list(@Query() listRecipeInstructionsDto: ListRecipeInstructionsDto): Promise<RecipeInstruction[]> {
    const recipeInstructions = await this.recipeInstructionReadRepository.getByRecipeId(
      listRecipeInstructionsDto.recipeId,
    );

    return this.recipeInstructionSerializer.serializeMany(recipeInstructions);
  }
}
