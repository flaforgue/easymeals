import { House } from '#/core/user/house/entities/house.entity';

export abstract class HouseWriteRepository {
  public abstract create(house: House): Promise<void>;

  public abstract update(house: House): Promise<void>;
}
