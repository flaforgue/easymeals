import { ProductCategory } from '#/prisma/client';

export abstract class ProductCategoryReadRepository {
  public abstract getAll(): Promise<ProductCategory[]>;
}
