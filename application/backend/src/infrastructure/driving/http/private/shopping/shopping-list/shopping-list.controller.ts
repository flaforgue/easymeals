import { Body, Controller, Get, HttpCode, Post, Query } from '@nestjs/common';
import { NB_SHOPPLING_LISTS_PER_PAGE, ShoppingList as SerializedShoppingList } from '#/shared';
import { CreateShoppingListDto } from '#/infrastructure/driving/http/private/shopping/shopping-list/inputs/create-shopping-list.dto';
import { ListShoppingListsDto } from '#/infrastructure/driving/http/private/shopping/shopping-list/inputs/list-shopping-lists.dto';
import { UpdateShoppingListDto } from '#/infrastructure/driving/http/private/shopping/shopping-list/inputs/update-shopping-list.dto';
import { DeleteShoppingListDto } from '#/infrastructure/driving/http/private/shopping/shopping-list/inputs/delete-shopping-list.dto';
import { Auth } from '#/infrastructure/driving/http/shared/auth/auth.decorator';
import { FindShoppingListDto } from '#/infrastructure/driving/http/private/shopping/shopping-list/inputs/find-shopping-list.dto';
import { AddMealsToShoppingListDto } from '#/infrastructure/driving/http/private/shopping/shopping-list/inputs/add-meals-to-shopping-list.dto';
import { AuthUser } from '#/core/generic/auth/auth-user.interface';
import { AddMealsToShoppingListCommandHandler } from '#/core/shopping/shopping-list/commands/add-meals-to-shopping-list/add-meals-to-shopping-list.handler';
import { ShoppingListReadRepository } from '#/core/shopping/shopping-list/repositories/shopping-list.read-repository';
import { ShoppingListWriteRepository } from '#/core/shopping/shopping-list/repositories/shopping-list.write-repository';
import { ShoppingListSerializer } from '#/infrastructure/driving/http/private/shopping/shopping-list/outputs/shopping-list.serializer';
import { PrivateBaseController } from '#/infrastructure/driving/http/private/private-base.controller';
import { AddMealsToShoppingListCommand } from '#/core/shopping/shopping-list/commands/add-meals-to-shopping-list/add-meals-to-shopping-list.command';
import { CreateShoppingListHandler } from '#/core/shopping/shopping-list/commands/create-shopping-list/create-shopping-list.handler';
import { CreateShoppingListCommand } from '#/core/shopping/shopping-list/commands/create-shopping-list/create-shopping-list.command';
import { RenameShoppingListCommand } from '#/core/shopping/shopping-list/commands/rename-shopping-list/rename-shopping-list.command';
import { RenameShoppingListHandler } from '#/core/shopping/shopping-list/commands/rename-shopping-list/rename-shopping-list.handler';

@Controller('private/shopping/shopping-list')
export class ShoppingListController extends PrivateBaseController {
  public constructor(
    private shoppingListReadRepository: ShoppingListReadRepository,
    private shoppingListWriteRepository: ShoppingListWriteRepository,
    private addMealsToShoppingListCommandHandler: AddMealsToShoppingListCommandHandler,
    private createShoppingListHandler: CreateShoppingListHandler,
    private renameShoppingListHandler: RenameShoppingListHandler,
    private shoppingListSerializer: ShoppingListSerializer,
  ) {
    super();
  }

  @Post('/create')
  @HttpCode(204)
  public create(@Auth() authUser: AuthUser, @Body() createShoppingListDto: CreateShoppingListDto): Promise<void> {
    return this.createShoppingListHandler.handle(
      new CreateShoppingListCommand(createShoppingListDto.id, authUser.houseId, createShoppingListDto.name),
    );
  }

  @Post('/add-meals')
  @HttpCode(204)
  public addMeals(
    @Auth() authUser: AuthUser,
    @Body() addMealsToShoppingListDto: AddMealsToShoppingListDto,
  ): Promise<void> {
    return this.addMealsToShoppingListCommandHandler.handle(
      new AddMealsToShoppingListCommand(
        addMealsToShoppingListDto.shoppingListId,
        addMealsToShoppingListDto.mealIds,
        authUser.houseId,
      ),
    );
  }

  @Post('/update')
  @HttpCode(204)
  public update(@Auth() authUser: AuthUser, @Body() updateShoppingListDto: UpdateShoppingListDto): Promise<void> {
    return this.renameShoppingListHandler.handle(
      new RenameShoppingListCommand(updateShoppingListDto.id, authUser.houseId, updateShoppingListDto.name),
    );
  }

  @Post('/delete')
  @HttpCode(204)
  public delete(@Auth() authUser: AuthUser, @Body() depeteShoppingListDto: DeleteShoppingListDto): Promise<void> {
    return this.shoppingListWriteRepository.delete({
      shoppingListId: depeteShoppingListDto.id,
      houseId: authUser.houseId,
    });
  }

  @Get('/list')
  @HttpCode(200)
  public async list(
    @Auth() authUser: AuthUser,
    @Query() listShoppingListsDto: ListShoppingListsDto,
  ): Promise<SerializedShoppingList[]> {
    const shoppingLists = await this.shoppingListReadRepository.getPage(authUser.houseId, {
      page: listShoppingListsDto.page,
      nbPerPage: NB_SHOPPLING_LISTS_PER_PAGE,
      orderBy: 'createdAt',
      orderDirection: 'desc',
    });

    return this.shoppingListSerializer.serializeMany(shoppingLists);
  }

  @Get('/find')
  @HttpCode(200)
  public async find(
    @Auth() authUser: AuthUser,
    @Query() findShoppingListDto: FindShoppingListDto,
  ): Promise<SerializedShoppingList> {
    const shoppingList = await this.shoppingListReadRepository.findById({
      houseId: authUser.houseId,
      id: findShoppingListDto.id,
    });

    return this.shoppingListSerializer.serialize(shoppingList);
  }
}
