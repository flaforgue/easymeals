import { House } from '#/core/user/house/entities/house.entity';
import { House as PrismaHouse } from '#/prisma/client';

interface HouseWithUsers {
  id: string;
  name: string;
  joinKey: string;
  defaultNbPortions: number;
  users: {
    name: string | null;
    id: string;
  }[];
}

export abstract class HouseReadRepository {
  public abstract findByJoinKey(joinKey: string): Promise<PrismaHouse>;

  public abstract findByIdWithUsers(id: string): Promise<HouseWithUsers>;

  public abstract findEntityById(id: string): Promise<House>;

  public abstract findDefaultNbPortionsById(houseId: string): Promise<number>;
}
