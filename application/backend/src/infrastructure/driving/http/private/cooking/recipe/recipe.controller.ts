import { Body, Controller, Get, HttpCode, Post, Query } from '@nestjs/common';
import { Recipe } from '#/shared';
import { CreateRecipeDto } from '#/infrastructure/driving/http/private/cooking/recipe/inputs/create-recipe.dto';
import { DeleteRecipeDto } from '#/infrastructure/driving/http/private/cooking/recipe/inputs/delete-recipe.dto';
import { ListRecipesDto } from '#/infrastructure/driving/http/private/cooking/recipe/inputs/list-recipes.dto';
import { UpdateRecipeDto } from '#/infrastructure/driving/http/private/cooking/recipe/inputs/update-recipe.dto';
import { Auth } from '#/infrastructure/driving/http/shared/auth/auth.decorator';
import { AuthUser } from '#/core/generic/auth/auth-user.interface';
import { RecipeReadRepository } from '#/core/cooking/recipe/repositories/recipe.read-repository';
import { RecipeSerializer } from '#/infrastructure/driving/http/public/cooking/recipe/outputs/recipe.serializer';
import { RecipeWriteRepository } from '#/core/cooking/recipe/repositories/recipe.write-repository';
import { PrivateBaseController } from '#/infrastructure/driving/http/private/private-base.controller';
import { CreateRecipeHandler } from '#/core/cooking/recipe/commands/create-recipe/create-recipe.handler';
import { CreateRecipeCommand } from '#/core/cooking/recipe/commands/create-recipe/create-recipe.command';
import { UpdateRecipeHandler } from '#/core/cooking/recipe/commands/update-recipe/update-recipe.handler';
import { UpdateRecipeCommand } from '#/core/cooking/recipe/commands/update-recipe/update-recipe.command';
import { ImportRecipeDto } from '#/infrastructure/driving/http/private/cooking/recipe/inputs/import-recipe.dto';
import { ImportRecipeHandler } from '#/core/cooking/recipe/commands/import-recipe/import-recipe.handler';
import { ImportRecipeCommand } from '#/core/cooking/recipe/commands/import-recipe/import-recipe.command';
import { UpdateNbPortionsDto } from '#/infrastructure/driving/http/private/cooking/recipe/inputs/update-nb-portions.dto';
import { UpdateNbPortionsCommand } from '#/core/cooking/recipe/commands/update-nb-portions/update-nb-portions.command';
import { UpdateNbPortionsHandler } from '#/core/cooking/recipe/commands/update-nb-portions/update-nb-portions.handler';

@Controller('private/cooking/recipe')
export class RecipeController extends PrivateBaseController {
  public constructor(
    private readonly recipeReadRepository: RecipeReadRepository,
    private readonly recipeWriteRepository: RecipeWriteRepository,
    private readonly createRecipeHandler: CreateRecipeHandler,
    private readonly updateRecipeHandler: UpdateRecipeHandler,
    private readonly importRecipeHandler: ImportRecipeHandler,
    private readonly updateNbPortionsHandler: UpdateNbPortionsHandler,
    private readonly recipeSerializer: RecipeSerializer,
  ) {
    super();
  }

  @Get('/list')
  @HttpCode(200)
  public async list(@Auth() authUser: AuthUser, @Query() listRecipesDto: ListRecipesDto): Promise<Recipe[]> {
    const recipes = await this.recipeReadRepository.getFromFilters(authUser.id, authUser.houseId, {
      search: listRecipesDto.search,
      isVegetarian: listRecipesDto.isVegetarian,
      isFast: listRecipesDto.isFast,
      cuisineTypeId: listRecipesDto.cuisineTypeId,
      isBookmark: listRecipesDto.isBookmark,
      isUserContent: listRecipesDto.isUserContent,
    });

    return this.recipeSerializer.serializeMany(recipes);
  }

  @Post('/create')
  @HttpCode(204)
  public create(@Auth() authUser: AuthUser, @Body() createRecipeDto: CreateRecipeDto): Promise<void> {
    return this.createRecipeHandler.handle(
      new CreateRecipeCommand(
        createRecipeDto.id,
        authUser.houseId,
        createRecipeDto.name,
        createRecipeDto.illustrationUrl,
        createRecipeDto.preparationTimeInMinutes,
        createRecipeDto.totalTimeInMinutes,
        createRecipeDto.isVegetarian,
        createRecipeDto.cuisineTypeId,
      ),
    );
  }

  @Post('/update')
  @HttpCode(204)
  public update(@Auth() authUser: AuthUser, @Body() updateRecipeDto: UpdateRecipeDto): Promise<void> {
    return this.updateRecipeHandler.handle(
      new UpdateRecipeCommand(
        updateRecipeDto.id,
        authUser.houseId,
        updateRecipeDto.name,
        updateRecipeDto.illustrationUrl,
        updateRecipeDto.preparationTimeInMinutes,
        updateRecipeDto.totalTimeInMinutes,
        updateRecipeDto.isVegetarian,
        updateRecipeDto.cuisineTypeId,
      ),
    );
  }

  @Post('/update-nb-portions')
  @HttpCode(204)
  public updateNbPortions(@Auth() authUser: AuthUser, @Body() updateNbPortionsDto: UpdateNbPortionsDto): Promise<void> {
    return this.updateNbPortionsHandler.handle(
      new UpdateNbPortionsCommand(updateNbPortionsDto.id, authUser.houseId, updateNbPortionsDto.nbPortions),
    );
  }

  @Post('/delete')
  @HttpCode(204)
  public delete(@Auth() authUser: AuthUser, @Body() deleteRecipeDto: DeleteRecipeDto): Promise<void> {
    return this.recipeWriteRepository.delete({
      recipeId: deleteRecipeDto.id,
      houseId: authUser.houseId,
    });
  }

  @Post('/import')
  @HttpCode(204)
  public import(@Auth() authUser: AuthUser, @Body() importRecipeDto: ImportRecipeDto): Promise<void> {
    return this.importRecipeHandler.handle(
      new ImportRecipeCommand(importRecipeDto.recipeToImportId, importRecipeDto.recipeToCreateId, authUser.houseId),
    );
  }
}
