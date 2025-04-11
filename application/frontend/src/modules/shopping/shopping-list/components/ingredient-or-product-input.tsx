import AutocompleteInput from '#/components/inputs/autocomplete-input';
import { getItemById } from '#/utils/array';
import { useIngredientCategories } from '#/modules/shared/ingredient-category/queries';
import { useIngredients } from '#/modules/shared/ingredient/queries';
import { useProducts } from '#/modules/shopping/product/queries';
import { useProductCategories } from '#/modules/shopping/product-category/queries';

export type IngredientOrProductType = 'ingredient' | 'product' | null;

interface IngredientOrProductInputProps {
  value?: string;
  onChange: (id: string, type: IngredientOrProductType) => void;
  className?: string;
}

export default function IngredientOrProductInput({ value, onChange, className }: IngredientOrProductInputProps) {
  const { ingredients } = useIngredients();
  const ingredientCategories = useIngredientCategories();
  const ingredientOptions = ingredients.map((i) => {
    return {
      label: i.name,
      isActive: i.id === value,
      illustrationUrl: getItemById(ingredientCategories, i.ingredientCategoryId)?.illustrationUrl,
      onClick: () => onChange(i.id, 'ingredient'),
    };
  });
  const { products } = useProducts();
  const productCategories = useProductCategories();
  const productOptions = products.map((p) => {
    return {
      label: p.name,
      isActive: p.id === value,
      illustrationUrl: getItemById(productCategories, p.productCategoryId)?.illustrationUrl,
      onClick: () => onChange(p.id, 'product'),
    };
  });
  const allOptions = ingredientOptions.concat(productOptions);

  return (
    <div
      className={`
        ${className ?? ''}
      `}
    >
      <AutocompleteInput
        reset={() => onChange('', null)}
        options={allOptions}
        value={value}
        placeholder="Ajouter un ingrédient ou un produit"
      />
    </div>
  );
}
