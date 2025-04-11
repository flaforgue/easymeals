import { Product } from '#/prisma/client';

export abstract class ProductReadRepository {
  public abstract getFromFilters(filters: {
    houseId: string;
    onlyUserContent: boolean;
    productCategoryId: null | string;
    search: string;
  }): Promise<Product[]>;

  public abstract doesNameExistForHouse(name: string, houseId: string): Promise<boolean>;
}
