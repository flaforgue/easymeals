import IngredientInput from '#/modules/shared/ingredient/components/inputs/ingredient-input';
import { getItemById } from '#/utils/array';
import { useUnits } from '#/modules/shared/unit/queries';
import { useIngredients } from '#/modules/shared/ingredient/queries';
import { useEffect, useState } from 'react';
import LabeledNumberInput from '#/components/inputs/labeled-number-input';
import CreateButton from '#/components/buttons/simple-buttons/create-button';

interface QuantifiedIngredientFormProps {
  onSubmit: (ingredientId: string, quantity: number) => void;
  className?: string;
}

export default function QuantifiedIngredientForm({ onSubmit, className }: QuantifiedIngredientFormProps) {
  const { ingredients } = useIngredients();
  const [quantity, setQuantity] = useState<number>(1);
  const [ingredientId, setIngredientId] = useState<string>('');
  const isFormValid = ingredientId !== '' && quantity > 0;
  const handleSubmit = () => {
    onSubmit(ingredientId, quantity);
    setIngredientId('');
  };
  const units = useUnits();
  const [unitId, setUnitId] = useState<string>('');
  const unit = getItemById(units, unitId);
  const setUnitIdToIngredientUnitId = () => {
    if (ingredientId === '' || ingredients.length === 0) {
      return;
    }

    const ingredient = getItemById(ingredients, ingredientId);
    if (ingredient === undefined) {
      return;
    }

    setUnitId(ingredient?.unit.id);
  };
  useEffect(setUnitIdToIngredientUnitId, [ingredientId, ingredients]);

  const afterNewIngredientCreated = (ingredientId: string) => {
    setIngredientId(ingredientId);
  };

  return (
    <div
      className={`
        ${className ?? ''}
      `}
    >
      <IngredientInput
        value={ingredientId}
        onChange={setIngredientId}
        afterNewIngredientCreated={afterNewIngredientCreated}
      />
      <div
        className={`
          mt-4
          flex
          flex-wrap
          justify-between
        `}
      >
        <LabeledNumberInput
          value={quantity}
          onChange={setQuantity}
          innerLabel={unit?.name ?? 'N/A'}
          min={1}
        />

        <CreateButton
          onClick={handleSubmit}
          isDisabled={!isFormValid}
          tooltipText={isFormValid ? '' : 'Veuillez choisir un ingrédient'}
          className="w-fit"
        >
          Ajouter
        </CreateButton>
      </div>
    </div>
  );
}
