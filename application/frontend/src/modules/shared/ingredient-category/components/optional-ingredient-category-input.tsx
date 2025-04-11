import SelectInput from '#/components/inputs/select-input';
import { useIngredientCategories } from '#/modules/shared/ingredient-category/queries';
import { buildIngredientCategorySelectOption } from '#/modules/shared/ingredient-category/utils';

interface OptionalIngredientCategoryInputProps {
  value: string | null;
  onChange: (v: string | null) => void;
}

const emptyOption = {
  value: null,
  label: 'Toutes les catégories',
  illustrationUrl: '/icons/ingredient-categories.png',
};

export default function OptionalIngredientCategoryInput({ value, onChange }: OptionalIngredientCategoryInputProps) {
  const ingredientCategories = useIngredientCategories();
  const options = [emptyOption, ...ingredientCategories.map(buildIngredientCategorySelectOption)];

  return (
    <div className="min-w-60">
      <SelectInput
        options={options}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
