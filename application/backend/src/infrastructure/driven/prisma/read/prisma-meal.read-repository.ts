import { Meal, MealType } from '#/core/planning/meal/entities/meal.entity';
import {
  FindPlannedMealByIdQueryResult,
  GetPlannedMealsQueryResult,
  GetShoppableMealsQueryResult,
  MealReadRepository,
} from '#/core/planning/meal/repositories/meal.read-repository';
import { DateRange } from '#/core/planning/meal/value-objects/time-range';
import { PrismaService } from '#/infrastructure/driven/prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaMealReadRepository implements MealReadRepository {
  public constructor(private readonly prisma: PrismaService) {}

  public async doesExist(houseId: string, date: Date, mealType: MealType): Promise<boolean> {
    const nbFoundMeals = await this.prisma.meal.count({
      where: {
        houseId: houseId,
        date: date,
        mealType: mealType,
      },
    });

    return nbFoundMeals > 0;
  }

  public findById(id: { mealId: string; houseId: string }): Promise<FindPlannedMealByIdQueryResult> {
    return this.prisma.meal.findUniqueOrThrow({
      select: {
        id: true,
        date: true,
        nbPortions: true,
        mealType: true,
        recipe: {
          select: {
            id: true,
            name: true,
            illustrationUrl: true,
          },
        },
      },
      where: {
        id: id.mealId,
        houseId: id.houseId,
      },
    });
  }

  public async findEntityById(id: { mealId: string; houseId: string }): Promise<Meal> {
    const prismaMeal = await this.prisma.meal.findUniqueOrThrow({
      where: {
        id: id.mealId,
        houseId: id.houseId,
      },
    });

    return new Meal(
      prismaMeal.id,
      prismaMeal.houseId,
      prismaMeal.date,
      prismaMeal.mealType,
      prismaMeal.recipeId,
      prismaMeal.nbPortions,
    );
  }

  public async findEntityByTimeslot(timeSlot: {
    houseId: string;
    date: Date;
    mealType: MealType;
  }): Promise<Meal | null> {
    const dateAtMidnight = new Date(timeSlot.date);
    dateAtMidnight.setUTCHours(0, 0, 0, 0);

    const prismaMeal = await this.prisma.meal.findFirst({
      where: {
        houseId: timeSlot.houseId,
        mealType: timeSlot.mealType,
        date: dateAtMidnight,
      },
    });

    if (prismaMeal === null) {
      return null;
    }

    return new Meal(
      prismaMeal.id,
      prismaMeal.houseId,
      prismaMeal.date,
      prismaMeal.mealType,
      prismaMeal.recipeId,
      prismaMeal.nbPortions,
    );
  }

  public getPlannedMeals(houseId: string, dateRange: DateRange): Promise<GetPlannedMealsQueryResult> {
    return this.prisma.meal.findMany({
      select: {
        id: true,
        date: true,
        nbPortions: true,
        mealType: true,
        recipe: {
          select: {
            id: true,
            name: true,
            illustrationUrl: true,
          },
        },
      },
      where: {
        houseId: houseId,
        date: {
          gte: dateRange.start,
          lte: dateRange.end,
        },
      },
    });
  }

  public getShoppableMeals(houseId: string, mealIds: string[]): Promise<GetShoppableMealsQueryResult> {
    return this.prisma.meal.findMany({
      select: {
        nbPortions: true,
        recipe: {
          select: {
            nbPortions: true,
            ingredients: {
              select: {
                quantity: true,
                ingredient: {
                  select: {
                    id: true,
                    isStoredInQuantity: true,
                    unit: {
                      select: {
                        code: true,
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
      where: {
        id: {
          in: mealIds,
        },
        houseId: houseId,
      },
    });
  }
}
