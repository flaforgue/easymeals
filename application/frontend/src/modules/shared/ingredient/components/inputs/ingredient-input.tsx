import AutocompleteInput from '#/components/inputs/autocomplete-input';
import { getItemById } from '#/utils/array';
import { useIngredientCategories } from '#/modules/shared/ingredient-category/queries';
import { useIngredients } from '#/modules/shared/ingredient/queries';
import CreateIngredientModal from '#/modules/shared/ingredient/components/modals/create-ingredient-modal';
import { useState } from 'react';

interface IngredientInputProps {
  value?: string;
  onChange: (v: string) => void;
  afterNewIngredientCreated?: (ingredientId: string) => void;
}

export default function IngredientInput({ value, onChange, afterNewIngredientCreated }: IngredientInputProps) {
  const { ingredients } = useIngredients();
  const ingredientCategories = useIngredientCategories();
  const ingredientOptions = ingredients.map((ingredient) => {
    const isNameUnique = ingredients.find((i) => i.name === ingredient.name && i.id !== ingredient.id) === undefined;
    const label =
      !isNameUnique && ingredient.unit.abbreviation !== ''
        ? `${ingredient.name} (${ingredient.unit.abbreviation})`
        : ingredient.name;

    return {
      label: label,
      isActive: ingredient.id === value,
      illustrationUrl: getItemById(ingredientCategories, ingredient.ingredientCategoryId)?.illustrationUrl,
      onClick: () => onChange(ingredient.id),
    };
  });

  const [ingredientToCreateName, setIngredientToCreateName] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = (initialValue: string) => {
    setIngredientToCreateName(initialValue);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="min-w-60">
        <AutocompleteInput
          reset={() => onChange('')}
          options={ingredientOptions}
          value={value}
          placeholder="Ingrédient"
          hasCreateOption={true}
          onCreateOptionClick={openModal}
        />
      </div>
      <CreateIngredientModal
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        afterIngredientCreated={afterNewIngredientCreated}
        initialName={ingredientToCreateName}
      />
    </>
  );
}
