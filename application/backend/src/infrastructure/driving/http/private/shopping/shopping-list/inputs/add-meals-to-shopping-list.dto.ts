import { IsNotEmpty, IsString } from 'class-validator';
import { AddMealsToShoppingListCommand } from '#/shared';

export class AddMealsToShoppingListDto implements AddMealsToShoppingListCommand {
  @IsString()
  @IsNotEmpty()
  public readonly shoppingListId: string = '';

  @IsString({
    each: true,
  })
  public readonly mealIds: string[] = [];
}
