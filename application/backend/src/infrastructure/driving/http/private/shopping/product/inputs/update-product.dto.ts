import { UpdateProductCommand } from '#/shared';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateProductDto implements UpdateProductCommand {
  @IsString()
  @IsNotEmpty()
  public readonly id: string = '';

  @IsString()
  @IsNotEmpty()
  public readonly name: string = '';

  @IsString()
  @IsNotEmpty()
  public readonly productCategoryId: string = '';
}
