import { UpdateProductQuantityCommand } from '#/core/shopping/shopping-list/commands/update-product-quantity/update-product-quantity.command';
import { ShoppingListProductReadRepository } from '#/core/shopping/shopping-list/repositories/shopping-list-product.read-repository';
import { ShoppingListProductWriteRepository } from '#/core/shopping/shopping-list/repositories/shopping-list-product.write-repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UpdateProductQuantityHandler {
  public constructor(
    private readonly shoppingListProductReadRepository: ShoppingListProductReadRepository,
    private readonly shoppingListProductWriteRepository: ShoppingListProductWriteRepository,
  ) {}

  public async handle(command: UpdateProductQuantityCommand): Promise<void> {
    const shoppingListProduct = await this.shoppingListProductReadRepository.findEntityById({
      productId: command.productId,
      shoppingListId: command.shoppingListId,
      houseId: command.houseId,
    });

    shoppingListProduct.quantity = command.quantity;

    await this.shoppingListProductWriteRepository.updateQuantity(shoppingListProduct);

    return;
  }
}
