import { RenameShoppingListCommand } from '#/core/shopping/shopping-list/commands/rename-shopping-list/rename-shopping-list.command';
import { ShoppingListReadRepository } from '#/core/shopping/shopping-list/repositories/shopping-list.read-repository';
import { ShoppingListWriteRepository } from '#/core/shopping/shopping-list/repositories/shopping-list.write-repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class RenameShoppingListHandler {
  public constructor(
    private readonly shoppingListReadRepository: ShoppingListReadRepository,
    private readonly shoppingListWriteRepository: ShoppingListWriteRepository,
  ) {}

  public async handle(command: RenameShoppingListCommand): Promise<void> {
    const shoppingList = await this.shoppingListReadRepository.findEntityById({
      id: command.id,
      houseId: command.houseId,
    });

    shoppingList.name = command.name;

    return this.shoppingListWriteRepository.updateName(shoppingList);
  }
}
