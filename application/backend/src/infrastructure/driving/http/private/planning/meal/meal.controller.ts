import { Body, Controller, Get, HttpCode, Post, Query } from '@nestjs/common';
import { CreateMealDto } from '#/infrastructure/driving/http/private/planning/meal/inputs/create-meal.dto';
import { DeleteMealDto } from '#/infrastructure/driving/http/private/planning/meal/inputs/delete-meal.dto';
import { ListMealsDto } from '#/infrastructure/driving/http/private/planning/meal/inputs/list-meals.dto';
import { Meal as SerializedMeal } from '#/shared';
import { MealSerializer } from '#/infrastructure/driving/http/private/planning/meal/outputs/meal.serializer';
import { UpdateMealDto } from '#/infrastructure/driving/http/private/planning/meal/inputs/update-meal.dto';
import { Auth } from '#/infrastructure/driving/http/shared/auth/auth.decorator';
import { FindMealDto } from '#/infrastructure/driving/http/private/planning/meal/inputs/find-meal.dto';
import { AuthUser } from '#/core/generic/auth/auth-user.interface';
import { MealReadRepository } from '#/core/planning/meal/repositories/meal.read-repository';
import { MealWriteRepository } from '#/core/planning/meal/repositories/meal.write-repository';
import { PrivateBaseController } from '#/infrastructure/driving/http/private/private-base.controller';
import { CreateMealHandler } from '#/core/planning/meal/commands/create-meal/create-meal.handler';
import { CreateMealCommand } from '#/core/planning/meal/commands/create-meal/create-meal.command';
import { UpdateMealHandler } from '#/core/planning/meal/commands/update-meal/update-meal.handler';
import { UpdateMealCommand } from '#/core/planning/meal/commands/update-meal/update-meal.command';
import { DateRange } from '#/core/planning/meal/value-objects/time-range';
import { MoveMealHandler } from '#/core/planning/meal/commands/move-meal/move-meal.handler';
import { MoveMealCommand } from '#/core/planning/meal/commands/move-meal/move-meal.command';
import { MoveMealDto } from '#/infrastructure/driving/http/private/planning/meal/inputs/move-meal.dto';

@Controller('private/planning/meal')
export class MealController extends PrivateBaseController {
  public constructor(
    private readonly mealReadRepository: MealReadRepository,
    private readonly mealWriteRepository: MealWriteRepository,
    private readonly createMealHandler: CreateMealHandler,
    private readonly updateMealHandler: UpdateMealHandler,
    private readonly moveMealHandler: MoveMealHandler,
    private readonly mealSerializer: MealSerializer,
  ) {
    super();
  }

  @Get('/list')
  @HttpCode(200)
  public async list(@Auth() authUser: AuthUser, @Query() listMealsDto: ListMealsDto): Promise<SerializedMeal[]> {
    const meals = await this.mealReadRepository.getPlannedMeals(
      authUser.houseId,
      new DateRange(listMealsDto.dateFrom, listMealsDto.dateTo),
    );

    return this.mealSerializer.serializeMany(meals);
  }

  @Post('/create')
  @HttpCode(204)
  public create(@Auth() authUser: AuthUser, @Body() createMealDto: CreateMealDto): Promise<void> {
    return this.createMealHandler.handle(
      new CreateMealCommand(
        createMealDto.id,
        authUser.houseId,
        createMealDto.date,
        createMealDto.mealType,
        createMealDto.recipeId,
        createMealDto.nbPortions,
      ),
    );
  }

  @Post('/update')
  @HttpCode(204)
  public update(@Auth() authUser: AuthUser, @Body() updateMealDto: UpdateMealDto): Promise<void> {
    return this.updateMealHandler.handle(
      new UpdateMealCommand(updateMealDto.id, authUser.houseId, updateMealDto.recipeId, updateMealDto.nbPortions),
    );
  }

  @Post('/move')
  @HttpCode(204)
  public move(@Auth() authUser: AuthUser, @Body() moveMealDto: MoveMealDto): Promise<void> {
    return this.moveMealHandler.handle(
      new MoveMealCommand(authUser.houseId, moveMealDto.mealId, moveMealDto.newDate, moveMealDto.newMealType),
    );
  }

  @Post('/delete')
  @HttpCode(204)
  public delete(@Auth() authUser: AuthUser, @Body() deleteMealDto: DeleteMealDto): Promise<void> {
    return this.mealWriteRepository.delete({
      mealId: deleteMealDto.id,
      houseId: authUser.houseId,
    });
  }

  @Get('/find')
  @HttpCode(200)
  public async find(@Auth() authUser: AuthUser, @Query() findMealDto: FindMealDto): Promise<SerializedMeal> {
    const meal = await this.mealReadRepository.findById({
      mealId: findMealDto.id,
      houseId: authUser.houseId,
    });

    return this.mealSerializer.serialize(meal);
  }
}
