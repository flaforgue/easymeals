import { getReadableQuantityLabel } from '#/modules/shared/ingredient/utils';
import { QuantifiedIngredient } from '#/shared';

interface QuantifiedIngredientLabelProps {
  quantifiedIngredient: QuantifiedIngredient;
  shouldRoundQuantity: boolean;
  className?: string;
}
export default function QuantifiedIngredientLabel({
  quantifiedIngredient,
  shouldRoundQuantity,
  className,
}: QuantifiedIngredientLabelProps) {
  return (
    <span
      className={`
        text-sm

        mobile:text-base

        ${className ?? ''}
      `}
    >
      <span
        className={`
          mr-1
          font-extrabold
        `}
      >
        {shouldRoundQuantity
          ? getReadableQuantityLabel(quantifiedIngredient)
          : `${quantifiedIngredient.quantity}${quantifiedIngredient.unitAbbreviation}`}
      </span>
      {quantifiedIngredient.name}
    </span>
  );
}
