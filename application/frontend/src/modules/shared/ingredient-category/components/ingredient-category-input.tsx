import SelectInput from '#/components/inputs/select-input';
import { useEffect } from 'react';
import { useIngredientCategories } from '#/modules/shared/ingredient-category/queries';
import { buildIngredientCategorySelectOption } from '#/modules/shared/ingredient-category/utils';

interface IngredientCategoryInputProps {
  value: string;
  onChange: (v: string) => void;
}

export default function IngredientCategoryInput({ value, onChange }: IngredientCategoryInputProps) {
  const ingredientCategories = useIngredientCategories();
  const ingredientCategoriesOptions = ingredientCategories.map(buildIngredientCategorySelectOption);
  const selectFirstIngredientCategoryId = () => {
    if (ingredientCategories.length > 0 && value === '') {
      onChange(ingredientCategories[0].id);
    }
  };
  useEffect(selectFirstIngredientCategoryId, [onChange, ingredientCategories, value]);

  if (value === '') {
    return undefined;
  }

  return (
    <div className="min-w-44">
      <SelectInput
        options={ingredientCategoriesOptions}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
