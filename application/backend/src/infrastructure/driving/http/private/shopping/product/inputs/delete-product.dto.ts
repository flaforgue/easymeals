import { DeleteProductCommand } from '#/shared';
import { IsNotEmpty, IsString } from 'class-validator';

export class DeleteProductDto implements DeleteProductCommand {
  @IsString()
  @IsNotEmpty()
  public readonly id: string = '';
}
