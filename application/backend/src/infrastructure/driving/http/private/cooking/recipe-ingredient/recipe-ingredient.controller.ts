import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { CreateRecipeIngredientDto } from '#/infrastructure/driving/http/private/cooking/recipe-ingredient/inputs/create-recipe-ingredient.dto';
import { DeleteRecipeIngredientDto } from '#/infrastructure/driving/http/private/cooking/recipe-ingredient/inputs/delete-recipe-ingredient.dto';
import { Auth } from '#/infrastructure/driving/http/shared/auth/auth.decorator';
import { UpdateRecipeIngredientDto } from '#/infrastructure/driving/http/private/cooking/recipe-ingredient/inputs/update-recipe-ingredient.dto';
import { AuthUser } from '#/core/generic/auth/auth-user.interface';
import { RecipeIngredientWriteRepository } from '#/core/cooking/recipe/repositories/recipe-ingredient.write-repository';
import { PrivateBaseController } from '#/infrastructure/driving/http/private/private-base.controller';
import { AddIngredientToRecipeHandler } from '#/core/cooking/recipe/commands/add-ingredient-to-recipe/add-ingredient-to-recipe.handler';
import { AddIngredientToRecipeCommand } from '#/core/cooking/recipe/commands/add-ingredient-to-recipe/add-ingredient-to-recipe.command';
import { UpdateIngredientQuantityCommand } from '#/core/cooking/recipe/commands/update-ingredient-quantity/update-ingredient-quantity.command';
import { UpdateIngredientQuantityHandler } from '#/core/cooking/recipe/commands/update-ingredient-quantity/update-ingredient-quantity.handler';

@Controller('private/cooking/recipe-ingredient')
export class RecipeIngredientController extends PrivateBaseController {
  public constructor(
    private recipeIngredientWriteRepository: RecipeIngredientWriteRepository,
    private addIngredientToRecipeHandler: AddIngredientToRecipeHandler,
    private updateIngredientQuantityHandler: UpdateIngredientQuantityHandler,
  ) {
    super();
  }

  @Post('/create')
  @HttpCode(204)
  public create(
    @Auth() authUser: AuthUser,
    @Body() createRecipeIngredientDto: CreateRecipeIngredientDto,
  ): Promise<void> {
    return this.addIngredientToRecipeHandler.handle(
      new AddIngredientToRecipeCommand(
        createRecipeIngredientDto.ingredientId,
        createRecipeIngredientDto.recipeId,
        authUser.houseId,
        createRecipeIngredientDto.quantity,
      ),
    );
  }

  @Post('/update')
  @HttpCode(204)
  public update(
    @Auth() authUser: AuthUser,
    @Body() updateRecipeIngredientDto: UpdateRecipeIngredientDto,
  ): Promise<void> {
    return this.updateIngredientQuantityHandler.handle(
      new UpdateIngredientQuantityCommand(
        updateRecipeIngredientDto.ingredientId,
        updateRecipeIngredientDto.recipeId,
        authUser.houseId,
        updateRecipeIngredientDto.quantity,
      ),
    );
  }

  @Post('/delete')
  @HttpCode(204)
  public delete(
    @Auth() authUser: AuthUser,
    @Body() deleteRecipeIngredientDto: DeleteRecipeIngredientDto,
  ): Promise<void> {
    return this.recipeIngredientWriteRepository.delete({
      houseId: authUser.houseId,
      recipeId: deleteRecipeIngredientDto.recipeId,
      ingredientId: deleteRecipeIngredientDto.ingredientId,
    });
  }
}
