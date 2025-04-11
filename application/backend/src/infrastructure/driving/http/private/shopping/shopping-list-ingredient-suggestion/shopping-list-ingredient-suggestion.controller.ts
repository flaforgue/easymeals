import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { Auth } from '#/infrastructure/driving/http/shared/auth/auth.decorator';
import { DeleteShoppingListIngredientSuggestionDto } from '#/infrastructure/driving/http/private/shopping/shopping-list-ingredient-suggestion/inputs/delete-shopping-list-ingredient-suggestion.dto';
import { AuthUser } from '#/core/generic/auth/auth-user.interface';
import { ShoppingListIngredientSuggestionWriteRepository } from '#/core/shopping/shopping-list/repositories/shopping-list-ingredient-suggestion.write-repository';
import { PrivateBaseController } from '#/infrastructure/driving/http/private/private-base.controller';
import { AcceptShoppingListIngredientSuggestionDto } from '#/infrastructure/driving/http/private/shopping/shopping-list-ingredient-suggestion/inputs/accept-shopping-list-ingredient-suggestion.dto';
import { AcceptIngredientSuggestionHandler } from '#/core/shopping/shopping-list/commands/accept-ingredient-suggestion/accept-ingredient-suggestion.handler';
import { AcceptIngredientSuggestionCommand } from '#/core/shopping/shopping-list/commands/accept-ingredient-suggestion/accept-ingredient-suggestion.command';

@Controller('private/shopping/shopping-list-ingredient-suggestion')
export class ShoppingListIngredientSuggestionController extends PrivateBaseController {
  public constructor(
    private shoppingListIngredientSuggestionWriteRepository: ShoppingListIngredientSuggestionWriteRepository,
    private acceptIngredientSuggestionHandler: AcceptIngredientSuggestionHandler,
  ) {
    super();
  }

  @Post('/accept')
  @HttpCode(204)
  public accept(
    @Auth() authUser: AuthUser,
    @Body()
    acceptShoppingListIngredientSuggestionDto: AcceptShoppingListIngredientSuggestionDto,
  ): Promise<void> {
    return this.acceptIngredientSuggestionHandler.handle(
      new AcceptIngredientSuggestionCommand(
        acceptShoppingListIngredientSuggestionDto.ingredientId,
        acceptShoppingListIngredientSuggestionDto.shoppingListId,
        authUser.houseId,
      ),
    );
  }

  @Post('/delete')
  @HttpCode(204)
  public delete(
    @Auth() authUser: AuthUser,
    @Body()
    deleteShoppingListIngredientSuggestionDto: DeleteShoppingListIngredientSuggestionDto,
  ): Promise<void> {
    return this.shoppingListIngredientSuggestionWriteRepository.delete({
      houseId: authUser.houseId,
      ingredientId: deleteShoppingListIngredientSuggestionDto.ingredientId,
      shoppingListId: deleteShoppingListIngredientSuggestionDto.shoppingListId,
    });
  }
}
