import { getItemById } from '#/utils/array';
import { useUnits } from '#/modules/shared/unit/queries';
import { useIngredients } from '#/modules/shared/ingredient/queries';
import { useEffect, useState } from 'react';
import LabeledNumberInput from '#/components/inputs/labeled-number-input';
import IngredientOrProductInput, {
  IngredientOrProductType,
} from '#/modules/shopping/shopping-list/components/ingredient-or-product-input';
import CreateButton from '#/components/buttons/simple-buttons/create-button';
import { getIncrementValue } from '#/modules/shared/ingredient/utils';

interface QuantifiedIngredientOrProductFormProps {
  onSubmit: (ingredientOrProductId: string, quantity: number, type: IngredientOrProductType) => void;
}

export default function QuantifiedIngredientOrProductForm({ onSubmit }: QuantifiedIngredientOrProductFormProps) {
  const { ingredients } = useIngredients();
  const [quantity, setQuantity] = useState<number>(1);
  const [ingredientOrProductId, setIngredientOrProductId] = useState<string>('');
  const [type, setType] = useState<IngredientOrProductType>(null);
  const handleIngredientOrProductIdChange = (id: string, type: IngredientOrProductType) => {
    setIngredientOrProductId(id);
    setType(type);
  };

  const isFormValid = quantity > 0 && ingredientOrProductId !== '' && type !== null;
  const handleSubmit = () => {
    if (!isFormValid) {
      return;
    }

    onSubmit(ingredientOrProductId, quantity, type);
    setIngredientOrProductId('');
    setType(null);
  };

  const units = useUnits();
  const [unitId, setUnitId] = useState<string>('');
  const unit = getItemById(units, unitId);
  const setUnitIdToIngredientUnitId = () => {
    setUnitId(getItemById(ingredients, ingredientOrProductId)?.unit.id ?? '');
  };
  useEffect(setUnitIdToIngredientUnitId, [ingredientOrProductId, ingredients]);

  return (
    <div
      className={`
        flex
        w-full
        gap-2
      `}
    >
      <IngredientOrProductInput
        value={ingredientOrProductId}
        onChange={handleIngredientOrProductIdChange}
        className={`
          w-full

          tablet:w-80
        `}
      />
      <div
        className={`
          flex
          justify-end
          gap-2
        `}
      >
        <LabeledNumberInput
          value={quantity}
          onChange={setQuantity}
          innerLabel={unit?.name ?? 'N/A'}
          incrementValue={unit !== undefined ? getIncrementValue(unit.code) : 1}
        />
        <div
          data-tooltip-content={isFormValid ? '' : 'Veuillez sélectionner un élément à ajouter'}
          data-tooltip-id="global"
        >
          <CreateButton
            onClick={handleSubmit}
            isDisabled={!isFormValid}
            className="w-fit"
          >
            Ajouter
          </CreateButton>
        </div>
      </div>
    </div>
  );
}
