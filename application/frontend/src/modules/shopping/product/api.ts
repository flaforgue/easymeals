import { CreateProductCommand, DeleteProductCommand, ListProductsQuery, Product, UpdateProductCommand } from '#/shared';
import { fetchPrivateCommand, fetchPrivateQuery } from '#/api/clients/private-client';

export function listProducts(query: ListProductsQuery): Promise<Product[]> {
  return fetchPrivateQuery('/shopping/product/list', query) as Promise<Product[]>;
}

export function createProduct(command: CreateProductCommand): Promise<void> {
  return fetchPrivateCommand('/shopping/product/create', command) as Promise<void>;
}

export function deleteProduct(command: DeleteProductCommand): Promise<void> {
  return fetchPrivateCommand('/shopping/product/delete', command) as Promise<void>;
}

export function updateProduct(command: UpdateProductCommand): Promise<void> {
  return fetchPrivateCommand('/shopping/product/update', command) as Promise<void>;
}
