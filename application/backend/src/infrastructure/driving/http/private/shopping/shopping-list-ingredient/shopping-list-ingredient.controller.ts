import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { DeleteShoppingListIngredientDto } from '#/infrastructure/driving/http/private/shopping/shopping-list-ingredient/inputs/delete-shopping-list-ingredient.dto';
import { CreateShoppingListIngredientDto } from '#/infrastructure/driving/http/private/shopping/shopping-list-ingredient/inputs/create-shopping-list-ingredient.dto';
import { Auth } from '#/infrastructure/driving/http/shared/auth/auth.decorator';
import { UpdateShoppingListIngredientDto } from '#/infrastructure/driving/http/private/shopping/shopping-list-ingredient/inputs/update-shopping-list-ingredient.dto';
import { CheckShoppingListIngredientDto } from '#/infrastructure/driving/http/private/shopping/shopping-list-ingredient/inputs/check-shopping-list-ingredient.dto';
import { AuthUser } from '#/core/generic/auth/auth-user.interface';
import { ShoppingListIngredientWriteRepository } from '#/core/shopping/shopping-list/repositories/shopping-list-ingredient.write-repository';
import { PrivateBaseController } from '#/infrastructure/driving/http/private/private-base.controller';
import { AddIngredientToShoppingListHandler } from '#/core/shopping/shopping-list/commands/add-ingredient-to-shopping-list/add-ingredient-to-shopping-list.handler';
import { AddIngredientToShoppingListCommand } from '#/core/shopping/shopping-list/commands/add-ingredient-to-shopping-list/add-ingredient-to-shopping-list.command';
import { UpdateIngredientQuantityHandler } from '#/core/shopping/shopping-list/commands/update-ingredient-quantity/update-ingredient-quantity.handler';
import { UpdateIngredientQuantityCommand } from '#/core/shopping/shopping-list/commands/update-ingredient-quantity/update-ingredient-quantity.command';

@Controller('private/shopping/shopping-list-ingredient')
export class ShoppingListIngredientController extends PrivateBaseController {
  public constructor(
    private shoppingListIngredientWriteRepository: ShoppingListIngredientWriteRepository,
    private addIngredientToShoppingListHandler: AddIngredientToShoppingListHandler,
    private updateIngredientQuantityHandler: UpdateIngredientQuantityHandler,
  ) {
    super();
  }

  @Post('/create')
  @HttpCode(204)
  public create(
    @Auth() authUser: AuthUser,
    @Body() createShoppingListIngredientDto: CreateShoppingListIngredientDto,
  ): Promise<void> {
    return this.addIngredientToShoppingListHandler.handle(
      new AddIngredientToShoppingListCommand(
        createShoppingListIngredientDto.ingredientId,
        createShoppingListIngredientDto.quantity,
        createShoppingListIngredientDto.shoppingListId,
        authUser.houseId,
      ),
    );
  }

  @Post('/update')
  @HttpCode(204)
  public update(
    @Auth() authUser: AuthUser,
    @Body() updateShoppingListIngredientDto: UpdateShoppingListIngredientDto,
  ): Promise<void> {
    return this.updateIngredientQuantityHandler.handle(
      new UpdateIngredientQuantityCommand(
        updateShoppingListIngredientDto.ingredientId,
        updateShoppingListIngredientDto.quantity,
        updateShoppingListIngredientDto.shoppingListId,
        authUser.houseId,
      ),
    );
  }

  @Post('/check')
  @HttpCode(204)
  public check(
    @Auth() authUser: AuthUser,
    @Body() checkShoppingListIngredientDto: CheckShoppingListIngredientDto,
  ): Promise<void> {
    return this.shoppingListIngredientWriteRepository.updateCheckState(
      {
        houseId: authUser.houseId,
        shoppingListId: checkShoppingListIngredientDto.shoppingListId,
        ingredientId: checkShoppingListIngredientDto.ingredientId,
      },
      checkShoppingListIngredientDto.isChecked,
    );
  }

  @Post('/delete')
  @HttpCode(204)
  public delete(
    @Auth() authUser: AuthUser,
    @Body() deleteShoppingListIngredientDto: DeleteShoppingListIngredientDto,
  ): Promise<void> {
    return this.shoppingListIngredientWriteRepository.delete({
      houseId: authUser.houseId,
      ingredientId: deleteShoppingListIngredientDto.ingredientId,
      shoppingListId: deleteShoppingListIngredientDto.shoppingListId,
    });
  }
}
