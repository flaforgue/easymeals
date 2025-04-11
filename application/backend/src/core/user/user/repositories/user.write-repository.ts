export abstract class UserWriteRepository {
  public abstract create(idpId: string, houseId: string): Promise<void>;

  public abstract updateName(id: string, name: string): Promise<void>;

  public abstract joinHouse(userId: string, houseJoinKey: string): Promise<void>;
}
