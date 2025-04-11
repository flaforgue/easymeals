import SelectInput from '#/components/inputs/select-input';
import { useProductCategories } from '#/modules/shopping/product-category/queries';
import { buildProductCategorySelectOption } from '#/modules/shopping/product-category/utils';

interface OptionalProductCategoryInputProps {
  value: string | null;
  onChange: (v: string | null) => void;
}

const emptyOption = {
  value: null,
  label: 'Toutes les catégories',
  illustrationUrl: '/icons/product-categories.png',
};

export default function OptionalProductCategoryInput({ value, onChange }: OptionalProductCategoryInputProps) {
  const productCategories = useProductCategories();
  const options = [emptyOption, ...productCategories.map(buildProductCategorySelectOption)];

  return (
    <div className="min-w-80">
      <SelectInput
        options={options}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
