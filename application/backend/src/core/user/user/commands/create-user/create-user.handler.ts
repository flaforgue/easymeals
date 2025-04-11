import { Injectable } from '@nestjs/common';
import { uuidv4 } from '#/shared';
import { HouseWriteRepository } from '#/core/user/house/repositories/house.write-repository';
import { UserWriteRepository } from '#/core/user/user/repositories/user.write-repository';
import { House } from '#/core/user/house/entities/house.entity';
import { CreateUserCommand } from '#/core/user/user/commands/create-user/create-user.command';

const DEFAULT_HOUSE_NAME = 'Maison';
const DEFAULT_NB_PORTIONS = 2;

@Injectable()
export class CreateUserCommandHandler {
  public constructor(
    private readonly houseWriteRepository: HouseWriteRepository,
    private readonly userWriteRepository: UserWriteRepository,
  ) {}

  public async handle(command: CreateUserCommand): Promise<void> {
    const house = new House(uuidv4(), DEFAULT_HOUSE_NAME, DEFAULT_NB_PORTIONS);

    await this.houseWriteRepository.create(house);
    await this.userWriteRepository.create(command.idpId, house.id);

    return;
  }
}
