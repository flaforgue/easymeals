import { Product } from '#/core/shopping/product/entities/product.entity';

export abstract class ProductWriteRepository {
  public abstract create(product: Product): Promise<void>;

  public abstract update(product: Product): Promise<void>;

  public abstract delete(id: { houseId: string; productId: string }): Promise<void>;
}
