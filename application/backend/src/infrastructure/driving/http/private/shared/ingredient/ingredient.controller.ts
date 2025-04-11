import { Body, Controller, Get, HttpCode, Post, Query } from '@nestjs/common';
import { Ingredient } from '#/shared';
import { IngredientSerializer } from '#/infrastructure/driving/http/private/shared/ingredient/outputs/ingredient.serializer';
import { Auth } from '#/infrastructure/driving/http/shared/auth/auth.decorator';
import { ListIngredientsDto } from '#/infrastructure/driving/http/private/shared/ingredient/inputs/list-ingredients.dto';
import { CreateIngredientDto } from '#/infrastructure/driving/http/private/shared/ingredient/inputs/create-ingredient.dto';
import { DeleteIngredientDto } from '#/infrastructure/driving/http/private/shared/ingredient/inputs/delete-ingredient.dto';
import { UpdateIngredientDto } from '#/infrastructure/driving/http/private/shared/ingredient/inputs/update-ingredient.dto';
import { AuthUser } from '#/core/generic/auth/auth-user.interface';
import { IngredientReadRepository } from '#/core/shared/ingredient/repositories/ingredient.read-repository';
import { IngredientWriteRepository } from '#/core/shared/ingredient/repositories/ingredient.write-repository';
import { PrivateBaseController } from '#/infrastructure/driving/http/private/private-base.controller';
import { CreateIngredientCommand } from '#/core/shared/ingredient/commands/create-ingredient/create-ingredient.command';
import { CreateIngredientHandler } from '#/core/shared/ingredient/commands/create-ingredient/create-ingredient.handler';
import { UpdateIngredientHandler } from '#/core/shared/ingredient/commands/update-ingredient/update-ingredient.handler';
import { UpdateIngredientCommand } from '#/core/shared/ingredient/commands/update-ingredient/update-ingredient.command';

@Controller('private/shared/ingredient')
export class IngredientController extends PrivateBaseController {
  public constructor(
    private readonly ingredientReadRepository: IngredientReadRepository,
    private readonly ingredientWriteRepository: IngredientWriteRepository,
    private readonly createIngredientHandler: CreateIngredientHandler,
    private readonly updateIngredientHandler: UpdateIngredientHandler,
    private readonly ingredientSerializer: IngredientSerializer,
  ) {
    super();
  }

  @Get('/list')
  @HttpCode(200)
  public async list(
    @Auth() authUser: AuthUser,
    @Query() listIngredientsDto: ListIngredientsDto,
  ): Promise<Ingredient[]> {
    const ingredients = await this.ingredientReadRepository.getFromFilters({
      ...listIngredientsDto,
      houseId: authUser.houseId,
    });

    return this.ingredientSerializer.serializeMany(ingredients);
  }

  @Post('/create')
  @HttpCode(204)
  public create(@Auth() authUser: AuthUser, @Body() createIngredientDto: CreateIngredientDto): Promise<void> {
    return this.createIngredientHandler.handle(
      new CreateIngredientCommand(
        createIngredientDto.id,
        authUser.houseId,
        createIngredientDto.name,
        createIngredientDto.unitId,
        createIngredientDto.ingredientCategoryId,
      ),
    );
  }

  @Post('/delete')
  @HttpCode(204)
  public delete(@Auth() authUser: AuthUser, @Body() deleteIngredientDto: DeleteIngredientDto): Promise<void> {
    return this.ingredientWriteRepository.delete({
      ingredientId: deleteIngredientDto.id,
      houseId: authUser.houseId,
    });
  }

  @Post('/update')
  @HttpCode(204)
  public update(@Auth() authUser: AuthUser, @Body() updateIngredientDto: UpdateIngredientDto): Promise<void> {
    return this.updateIngredientHandler.handle(
      new UpdateIngredientCommand(
        updateIngredientDto.id,
        authUser.houseId,
        updateIngredientDto.name,
        updateIngredientDto.unitId,
        updateIngredientDto.ingredientCategoryId,
      ),
    );
  }
}
