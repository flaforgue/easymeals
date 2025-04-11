import FloatingActionButtonContainer from '#/components/floating-action-button-container';
import IconProductShop from '#/components/icons/icon-product-shop';
import LocalLoadingOverlay from '#/components/overlays/local-loading-overlay';
import useDebouncedValue from '#/hooks/use-debounced-value';
import CreateProductButton from '#/modules/shopping/product/components/buttons/create-product-button';
import DeleteProductButton from '#/modules/shopping/product/components/buttons/delete-product-button';
import EditProductButton from '#/modules/shopping/product/components/buttons/edit-product-button';
import ListProductsForm from '#/modules/shopping/product/components/forms/list-products-form';
import ProductEmptyState from '#/modules/shopping/product/components/product-empty-state';
import { useProducts } from '#/modules/shopping/product/queries';
import { useProductCategories } from '#/modules/shopping/product-category/queries';
import { getItemById } from '#/utils/array';
import { useState } from 'react';

export default function ListProducts() {
  const productCategories = useProductCategories();
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebouncedValue(search, 500);
  const [isUserContent, setIsUserContent] = useState(true);
  const [productCategoryId, setProductCategoryId] = useState<null | string>(null);
  const { products, isLoading } = useProducts({
    search: debouncedSearch,
    productCategoryId: productCategoryId,
    onlyUserContent: isUserContent,
  });
  const isPageEmpty = products.length === 0 && !isLoading;

  return (
    <div className="pb-16">
      <div className="mb-8">
        <ListProductsForm
          search={search}
          setSearch={setSearch}
          productCategoryId={productCategoryId}
          setProductCategoryId={setProductCategoryId}
          isUserContent={isUserContent}
          setIsUserContent={setIsUserContent}
        />
      </div>
      <div
        className={`
          flex
          gap-4
        `}
      >
        {isPageEmpty && <ProductEmptyState />}
        {!isPageEmpty && (
          <>
            <div
              className={`
                w-full

                tablet:w-3/5
              `}
            >
              {!isPageEmpty && isLoading && (
                <div
                  className={`
                    relative
                    h-full
                    w-full
                    overflow-hidden
                    rounded
                  `}
                >
                  <LocalLoadingOverlay />
                </div>
              )}
              {products.map((product) => {
                return (
                  <div
                    key={product.id}
                    className={`
                      flex
                      items-center
                      justify-between
                      gap-1
                      border-b
                      border-slate-200
                      bg-slate-50
                      px-4
                      py-2
                      text-slate-700
                      transition-all

                      hover:bg-slate-100
                    `}
                  >
                    <div
                      className={`
                        flex
                        items-center
                        gap-2
                      `}
                    >
                      <img
                        width="35"
                        src={getItemById(productCategories, product.productCategoryId)?.illustrationUrl}
                        className={`
                          overflow-visible
                          rounded-full
                          bg-white
                          p-1.5
                          shadow
                        `}
                      />
                      <span>{product.name}</span>
                    </div>
                    {product.isUserContent && (
                      <div
                        className={`
                          flex
                          gap-1
                        `}
                      >
                        <EditProductButton product={product} />
                        <DeleteProductButton productId={product.id} />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            <div
              className={`
                hidden
                h-full
                w-2/5
                overflow-hidden
                px-4
                text-sky-600

                tablet:block
              `}
            >
              <IconProductShop />
            </div>
          </>
        )}
      </div>

      <FloatingActionButtonContainer>
        <CreateProductButton />
      </FloatingActionButtonContainer>
    </div>
  );
}
