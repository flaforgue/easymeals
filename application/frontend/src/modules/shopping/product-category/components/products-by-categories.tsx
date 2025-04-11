import { QuantifiedProduct } from '#/shared';
import { getItemsBy } from '#/shared';
import { useProductCategories } from '#/modules/shopping/product-category/queries';
import { ReactNode } from 'react';
import ProductsCategory from '#/modules/shopping/product-category/components/products-category';

interface ProductsByCategoriesProps<T extends QuantifiedProduct> {
  quantifiedProducts: T[];
  productComponentFactory: (product: T) => ReactNode;
}

export default function ProductsByCategories<T extends QuantifiedProduct>({
  quantifiedProducts,
  productComponentFactory,
}: ProductsByCategoriesProps<T>) {
  const productCategories = useProductCategories();

  const productsCategoriesComponents = productCategories
    .reduce((acc: { id: string; quantifiedProducts: T[] }[], productCategory) => {
      const categoryQuantifiedProducts = getItemsBy(quantifiedProducts, 'productCategoryId', productCategory.id);
      if (categoryQuantifiedProducts.length === 0) {
        return acc;
      }

      return [
        ...acc,
        {
          id: productCategory.id,
          quantifiedProducts: categoryQuantifiedProducts,
        },
      ];
    }, [])
    .sort((a, b) => b.quantifiedProducts.length - a.quantifiedProducts.length)
    .map((productCategory) => {
      return (
        <ProductsCategory
          key={productCategory.id}
          productCategoryId={productCategory.id}
          quantifiedProducts={productCategory.quantifiedProducts}
          productComponentFactory={productComponentFactory}
        />
      );
    });

  return <>{productsCategoriesComponents}</>;
}
