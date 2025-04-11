import SelectInput from '#/components/inputs/select-input';
import { useEffect } from 'react';
import { useProductCategories } from '#/modules/shopping/product-category/queries';

interface IngredientCategoryInputProps {
  value: string;
  onChange: (v: string) => void;
}

export default function IngredientCategoryInput({ value, onChange }: IngredientCategoryInputProps) {
  const productCategories = useProductCategories();
  const productCategoriesOptions = productCategories.map((i) => {
    return {
      value: i.id,
      label: i.name,
      illustrationUrl: i.illustrationUrl,
    };
  });

  const selectFirstProductCategoryId = () => {
    if (productCategories.length > 0 && value === '') {
      onChange(productCategories[0].id);
    }
  };
  useEffect(selectFirstProductCategoryId, [onChange, productCategories, value]);

  return (
    <SelectInput
      options={productCategoriesOptions}
      value={value}
      onChange={onChange}
    />
  );
}
