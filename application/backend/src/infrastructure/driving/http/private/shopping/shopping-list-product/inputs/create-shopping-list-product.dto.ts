import { CreateShoppingListProductCommand } from '#/shared';
import { IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';

export class CreateShoppingListProductDto implements CreateShoppingListProductCommand {
  @IsString()
  @IsNotEmpty()
  public readonly productId: string = '';

  @IsString()
  @IsNotEmpty()
  public readonly shoppingListId: string = '';

  @IsNumber({ maxDecimalPlaces: 3 }, { message: 'La quantité doit être un nombre' })
  @Min(0)
  public readonly quantity: number = 0;
}
