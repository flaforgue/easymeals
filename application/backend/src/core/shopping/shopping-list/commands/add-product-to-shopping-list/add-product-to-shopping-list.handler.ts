import { AddProductToShoppingListCommand } from '#/core/shopping/shopping-list/commands/add-product-to-shopping-list/add-product-to-shopping-list.command';
import { ShoppingListProduct } from '#/core/shopping/shopping-list/entities/shopping-list-product.entity';
import { ShoppingListProductWriteRepository } from '#/core/shopping/shopping-list/repositories/shopping-list-product.write-repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AddProductToShoppingListHandler {
  public constructor(private readonly shoppingListProductWriteRepository: ShoppingListProductWriteRepository) {}

  public async handle(command: AddProductToShoppingListCommand): Promise<void> {
    const shoppingListProduct = new ShoppingListProduct(
      command.productId,
      command.quantity,
      command.shoppingListId,
      command.houseId,
    );

    await this.shoppingListProductWriteRepository.addProductToShoppingList(shoppingListProduct);

    return;
  }
}
