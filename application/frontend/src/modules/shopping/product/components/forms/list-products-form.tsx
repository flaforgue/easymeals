import BooleanInput from '#/components/inputs/boolean-input';
import TextInput from '#/components/inputs/text-input';
import OptionalProductCategoryInput from '#/modules/shopping/product-category/components/optional-product-category-input';

interface ListProductsFormProps {
  search: string;
  setSearch: (v: string) => void;
  productCategoryId: null | string;
  setProductCategoryId: (v: null | string) => void;
  isUserContent: boolean;
  setIsUserContent: (v: boolean) => void;
}

export default function ListProductsForm({
  search,
  setSearch,
  productCategoryId,
  setProductCategoryId,
  isUserContent,
  setIsUserContent,
}: ListProductsFormProps) {
  return (
    <div
      className={`
        flex
        w-full
        flex-wrap
        items-center
        gap-2
      `}
    >
      <TextInput
        value={search}
        onChange={setSearch}
        placeholder="Nom du produit"
        className={`
          min-w-48
          flex-1
        `}
      />
      <div
        className={`
          hidden

          tablet:block
        `}
      >
        <OptionalProductCategoryInput
          value={productCategoryId}
          onChange={setProductCategoryId}
        />
      </div>
      <div
        className={`
          hidden

          tablet:block
        `}
      >
        <BooleanInput
          value={isUserContent}
          onChange={setIsUserContent}
        >
          <p>Mes produits</p>
        </BooleanInput>
      </div>
    </div>
  );
}
