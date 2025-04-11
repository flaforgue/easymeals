import { CuisineType } from '#/prisma/client';

export abstract class CuisineTypeReadRepository {
  public abstract getAll(): Promise<CuisineType[]>;
}
