import BooleanInput from '#/components/inputs/boolean-input';
import QuantifiedIngredientLabel from '#/modules/shared/ingredient/components/quantified-ingredient-label';
import { CheckedQuantifiedIngredient } from '#/shared';
import { useState } from 'react';

interface CheckableQuantifiedIngredientProps {
  quantifiedIngredient: CheckedQuantifiedIngredient;
  onChecked: (id: string, isChecked: boolean) => void;
  shouldRoundQuantity?: boolean;
}

export default function CheckableQuantifiedIngredient({
  quantifiedIngredient,
  onChecked,
  shouldRoundQuantity = true,
}: CheckableQuantifiedIngredientProps) {
  const [isChecked, setIsChecked] = useState(quantifiedIngredient.isChecked);
  const toggleIsChecked = () => {
    onChecked(quantifiedIngredient.id, !isChecked);
    setIsChecked(!isChecked);
  };

  return (
    <div
      className={`
        flex
        w-full
        items-center
        gap-2

        ${isChecked ? 'line-through' : ''}
      `}
    >
      <BooleanInput
        value={isChecked}
        onChange={toggleIsChecked}
      >
        <QuantifiedIngredientLabel
          className="ml-1"
          quantifiedIngredient={quantifiedIngredient}
          shouldRoundQuantity={shouldRoundQuantity}
        />
      </BooleanInput>
    </div>
  );
}
