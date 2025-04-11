export interface ListProductsQuery {
  search: string;
  productCategoryId: null | string;
  onlyUserContent: boolean;
}
