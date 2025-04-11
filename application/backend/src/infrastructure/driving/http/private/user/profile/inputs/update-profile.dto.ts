import { UpdateProfileCommand } from '#/shared';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateProfileDto implements UpdateProfileCommand {
  @IsString()
  @IsNotEmpty()
  public readonly name: string = '';
}
