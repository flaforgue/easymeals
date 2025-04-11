import Card from '#/components/cards/card';
import { getItemById } from '#/utils/array';
import { QuantifiedProduct } from '#/shared';
import { useProductCategories } from '#/modules/shopping/product-category/queries';
import { ReactNode } from 'react';
import { getRowSpan } from '#/utils/grids';

interface ProductsCategoryProps<T extends QuantifiedProduct> {
  productCategoryId: string;
  quantifiedProducts: T[];
  productComponentFactory: (product: T) => ReactNode;
}

export default function ProductsCategory<T extends QuantifiedProduct>({
  productCategoryId,
  quantifiedProducts,
  productComponentFactory,
}: ProductsCategoryProps<T>) {
  const productCategories = useProductCategories();
  const productCategory = getItemById(productCategories, productCategoryId);

  if (productCategory === undefined) {
    return null;
  }

  const rowSpan = getRowSpan(quantifiedProducts.length);
  const productsComponents = quantifiedProducts
    .sort((a, b) => a.quantity - b.quantity)
    .map((quantifiedProduct) => {
      return (
        <li
          key={quantifiedProduct.id}
          className="text-slate-700"
        >
          {productComponentFactory(quantifiedProduct)}
        </li>
      );
    });

  return (
    <Card
      className={`
        ${rowSpan}

        bg-white
      `}
    >
      <div
        className={`
          flex
          items-center
          border-b
          border-sky-100
          bg-sky-50
          p-4
          text-lg
        `}
      >
        <img
          height="45"
          width="45"
          src={productCategory.illustrationUrl}
          className={`
            mr-2
            overflow-visible
            rounded-full
            bg-white
            p-2.5
            shadow
          `}
        />
        {productCategory.name}
      </div>
      <ul
        className={`
          space-y-2
          p-4
        `}
      >
        {productsComponents}
      </ul>
    </Card>
  );
}
