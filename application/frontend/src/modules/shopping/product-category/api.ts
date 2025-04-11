import { fetchPublicQuery } from '#/api/clients/public-client';
import { ProductCategory } from '#/shared';

export function listProductCategories(): Promise<ProductCategory[]> {
  return fetchPublicQuery('/shopping/product-category/list') as Promise<ProductCategory[]>;
}
