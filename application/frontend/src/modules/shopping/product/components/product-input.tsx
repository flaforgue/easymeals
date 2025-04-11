import AutocompleteInput from '#/components/inputs/autocomplete-input';
import { getItemById } from '#/utils/array';
import { useProducts } from '#/modules/shopping/product/queries';
import { useProductCategories } from '#/modules/shopping/product-category/queries';

interface ProductInputProps {
  value?: string;
  onChange: (v: string) => void;
}

export default function ProductInput({ value, onChange }: ProductInputProps) {
  const { products } = useProducts();
  const productCategories = useProductCategories();
  const productOptions = products.map((product) => {
    return {
      label: product.name,
      isActive: product.id === value,
      illustrationUrl: getItemById(productCategories, product.productCategoryId)?.illustrationUrl,
      onClick: () => onChange(product.id),
    };
  });

  return (
    <div className="min-w-60">
      <AutocompleteInput
        reset={() => onChange('')}
        options={productOptions}
        value={value}
        placeholder="Produit"
      />
    </div>
  );
}
