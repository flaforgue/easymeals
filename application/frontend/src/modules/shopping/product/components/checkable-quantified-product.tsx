import BooleanInput from '#/components/inputs/boolean-input';
import { CheckedQuantifiedProduct } from '#/shared';
import { useEffect, useState } from 'react';

interface CheckableQuantifiedProductProps {
  quantifiedProduct: CheckedQuantifiedProduct;
  onChecked: (id: string, isChecked: boolean) => void;
}

export default function CheckableQuantifiedProduct({ quantifiedProduct, onChecked }: CheckableQuantifiedProductProps) {
  const [isChecked, setIsChecked] = useState(quantifiedProduct.isChecked);
  const toggleIsChecked = () => {
    onChecked(quantifiedProduct.id, !isChecked);
    setIsChecked(!isChecked);
  };

  const syncIsChecked = () => {
    setIsChecked(quantifiedProduct.isChecked);
  };
  useEffect(syncIsChecked, [quantifiedProduct]);

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
        <p>
          <span
            className={`
              mr-1
              font-extrabold
            `}
          >
            {quantifiedProduct.quantity}
          </span>
          {quantifiedProduct.name}
        </p>
      </BooleanInput>
    </div>
  );
}
