import { Body, Controller, Get, HttpCode, Post, Query } from '@nestjs/common';
import { House, UserHouse } from '#/shared';
import { Auth } from '#/infrastructure/driving/http/shared/auth/auth.decorator';
import { AuthUser } from '#/core/generic/auth/auth-user.interface';
import { HouseReadRepository } from '#/core/user/house/repositories/house.read-repository';
import { UserWriteRepository } from '#/core/user/user/repositories/user.write-repository';
import { JoinHouseDto } from '#/infrastructure/driving/http/private/user/house/inputs/join-house.dto';
import { UpdateUserHouseDto } from '#/infrastructure/driving/http/private/user/house/inputs/update-user-house.dto';
import { UserHouseSerializer } from '#/infrastructure/driving/http/private/user/house/outputs/user-house.serializer';
import { PrivateBaseController } from '#/infrastructure/driving/http/private/private-base.controller';
import { FindHouseByJoinKeyDto } from '#/infrastructure/driving/http/private/user/house/inputs/find-house-by-join-key.dto';
import { HouseSerializer } from '#/infrastructure/driving/http/private/user/house/outputs/house.serializer';
import { UpdateHouseInfosCommand } from '#/core/user/house/commands/update-house-infos/update-house-infos.command';
import { UpdateHouseInfosHandler } from '#/core/user/house/commands/update-house-infos/update-house-infos.handler';

@Controller('private/user/house')
export class HouseController extends PrivateBaseController {
  public constructor(
    private houseReadRepository: HouseReadRepository,
    private userWriteRepository: UserWriteRepository,
    private updateHouseInfosHandler: UpdateHouseInfosHandler,
    private userHouseSerializer: UserHouseSerializer,
    private houseSerializer: HouseSerializer,
  ) {
    super();
  }

  @Get('/find')
  @HttpCode(200)
  public async find(@Auth() authUser: AuthUser): Promise<UserHouse> {
    const house = await this.houseReadRepository.findByIdWithUsers(authUser.houseId);

    return this.userHouseSerializer.serialize(house);
  }

  @Get('/find-by-join-key')
  @HttpCode(200)
  public async findByJoinKey(@Query() findHouseByJoinKeyDto: FindHouseByJoinKeyDto): Promise<House> {
    const house = await this.houseReadRepository.findByJoinKey(findHouseByJoinKeyDto.joinKey);

    return this.houseSerializer.serialize(house);
  }

  @Post('/update')
  @HttpCode(204)
  public update(@Auth() authUser: AuthUser, @Body() updateUserHouseDto: UpdateUserHouseDto): Promise<void> {
    return this.updateHouseInfosHandler.handle(
      new UpdateHouseInfosCommand(authUser.houseId, updateUserHouseDto.name, updateUserHouseDto.defaultNbPortions),
    );
  }

  @Post('/join')
  @HttpCode(204)
  public join(@Auth() authUser: AuthUser, @Body() joinHouseDto: JoinHouseDto): Promise<void> {
    return this.userWriteRepository.joinHouse(authUser.id, joinHouseDto.joinKey);
  }
}
