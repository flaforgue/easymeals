import { Unit } from '#/prisma/client';

export abstract class UnitReadRepository {
  public abstract getAll(): Promise<Unit[]>;
}
