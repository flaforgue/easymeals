import { UpdateHouseInfosCommand } from '#/core/user/house/commands/update-house-infos/update-house-infos.command';
import { HouseReadRepository } from '#/core/user/house/repositories/house.read-repository';
import { HouseWriteRepository } from '#/core/user/house/repositories/house.write-repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UpdateHouseInfosHandler {
  public constructor(
    private readonly houseReadRepository: HouseReadRepository,
    private readonly houseWriteRepository: HouseWriteRepository,
  ) {}

  public async handle(command: UpdateHouseInfosCommand): Promise<void> {
    const house = await this.houseReadRepository.findEntityById(command.houseId);
    house.name = command.name;
    house.defaultNbPortions = command.defaultNbPortions;

    return this.houseWriteRepository.update(house);
  }
}
