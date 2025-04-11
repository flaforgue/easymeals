import { CreateShoppingListCommand } from '#/core/shopping/shopping-list/commands/create-shopping-list/create-shopping-list.command';
import { ShoppingList } from '#/core/shopping/shopping-list/entities/shopping-list.entity';
import { ShoppingListWriteRepository } from '#/core/shopping/shopping-list/repositories/shopping-list.write-repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CreateShoppingListHandler {
  public constructor(private readonly shoppingListWriteRepository: ShoppingListWriteRepository) {}

  public handle(command: CreateShoppingListCommand): Promise<void> {
    const shoppingList = new ShoppingList(command.id, command.houseId, command.name);

    return this.shoppingListWriteRepository.create(shoppingList);
  }
}
