import { CreateMealCommand } from '#/shared';
import { IsDate, IsInt, IsNotEmpty, IsString, Min } from 'class-validator';
import { Transform } from 'class-transformer';
import { castToDate } from '#/infrastructure/driving/http/query-string.utils';

export class CreateMealDto implements CreateMealCommand {
  @IsString()
  @IsNotEmpty()
  public readonly id: string = '';

  @IsDate()
  @Transform(castToDate)
  public readonly date: Date = new Date();

  @IsString()
  @IsNotEmpty()
  public readonly mealType: string = '';

  @IsString()
  @IsNotEmpty()
  public readonly recipeId: string = '';

  @IsInt()
  @Min(1)
  public readonly nbPortions: number = 0;
}
