export interface CreateProductCommand {
  id: string;
  name: string;
  productCategoryId: string;
}

export interface UpdateProductCommand {
  id: string;
  name: string;
  productCategoryId: string;
}

export interface DeleteProductCommand {
  id: string;
}
