export interface Product {
  id: string;
  name: string;
  productCategoryId: string;
  isUserContent: boolean;
}

export interface QuantifiedProduct {
  id: string;
  name: string;
  productCategoryId: string;
  quantity: number;
}
