import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { Auth } from '#/infrastructure/driving/http/shared/auth/auth.decorator';
import { DeleteShoppingListProductDto } from '#/infrastructure/driving/http/private/shopping/shopping-list-product/inputs/delete-shopping-list-product.dto';
import { UpdateShoppingListProductDto } from '#/infrastructure/driving/http/private/shopping/shopping-list-product/inputs/update-shopping-list-product.dto';
import { CreateShoppingListProductDto } from '#/infrastructure/driving/http/private/shopping/shopping-list-product/inputs/create-shopping-list-product.dto';
import { CheckShoppingListProductDto } from '#/infrastructure/driving/http/private/shopping/shopping-list-product/inputs/check-shopping-list-product.dto';
import { AuthUser } from '#/core/generic/auth/auth-user.interface';
import { ShoppingListProductWriteRepository } from '#/core/shopping/shopping-list/repositories/shopping-list-product.write-repository';
import { PrivateBaseController } from '#/infrastructure/driving/http/private/private-base.controller';
import { AddProductToShoppingListHandler } from '#/core/shopping/shopping-list/commands/add-product-to-shopping-list/add-product-to-shopping-list.handler';
import { AddProductToShoppingListCommand } from '#/core/shopping/shopping-list/commands/add-product-to-shopping-list/add-product-to-shopping-list.command';
import { UpdateProductQuantityHandler } from '#/core/shopping/shopping-list/commands/update-product-quantity/update-product-quantity.handler';
import { UpdateProductQuantityCommand } from '#/core/shopping/shopping-list/commands/update-product-quantity/update-product-quantity.command';

@Controller('private/shopping/shopping-list-product')
export class ShoppingListProductController extends PrivateBaseController {
  public constructor(
    private shoppingListProductWriteRepository: ShoppingListProductWriteRepository,
    private addProductToShoppingListHandler: AddProductToShoppingListHandler,
    private updateProductQuantityHandler: UpdateProductQuantityHandler,
  ) {
    super();
  }

  @Post('/delete')
  @HttpCode(204)
  public delete(
    @Auth() authUser: AuthUser,
    @Body() deleteShoppingListProductDto: DeleteShoppingListProductDto,
  ): Promise<void> {
    return this.shoppingListProductWriteRepository.delete({
      shoppingListId: deleteShoppingListProductDto.shoppingListId,
      productId: deleteShoppingListProductDto.productId,
      houseId: authUser.houseId,
    });
  }

  @Post('/update')
  @HttpCode(204)
  public update(
    @Auth() authUser: AuthUser,
    @Body() updateShoppingListProductDto: UpdateShoppingListProductDto,
  ): Promise<void> {
    return this.updateProductQuantityHandler.handle(
      new UpdateProductQuantityCommand(
        updateShoppingListProductDto.productId,
        updateShoppingListProductDto.quantity,
        updateShoppingListProductDto.shoppingListId,
        authUser.houseId,
      ),
    );
  }

  @Post('/check')
  @HttpCode(204)
  public check(
    @Auth() authUser: AuthUser,
    @Body() checkShoppingListProductDto: CheckShoppingListProductDto,
  ): Promise<void> {
    return this.shoppingListProductWriteRepository.updateCheckState(
      {
        shoppingListId: checkShoppingListProductDto.shoppingListId,
        productId: checkShoppingListProductDto.productId,
        houseId: authUser.houseId,
      },
      checkShoppingListProductDto.isChecked,
    );
  }

  @Post('/create')
  @HttpCode(204)
  public create(
    @Auth() authUser: AuthUser,
    @Body() createShoppingListProductDto: CreateShoppingListProductDto,
  ): Promise<void> {
    return this.addProductToShoppingListHandler.handle(
      new AddProductToShoppingListCommand(
        createShoppingListProductDto.productId,
        createShoppingListProductDto.quantity,
        createShoppingListProductDto.shoppingListId,
        authUser.houseId,
      ),
    );
  }
}
