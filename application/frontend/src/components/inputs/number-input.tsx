import { ChangeEvent, useId } from 'react';
import Label from '#/components/label';

type InputSize = 'tiny' | 'small' | 'medium';

interface NumberInputProps {
  label?: string;
  autoFocus?: true;
  value: number;
  size?: InputSize;
  min?: number;
  max?: number;
  onChange: (v: number) => void;
  className?: string;
}

const sizeSPaddings: Record<InputSize, string> = {
  tiny: 'px-1.5',
  small: 'px-2.5 py-1',
  medium: 'p-2.5',
};

const sizeWidths: Record<InputSize, string> = {
  tiny: 'w-8',
  small: 'w-16',
  medium: 'w-16',
};

export default function NumberInput({
  label,
  autoFocus,
  value,
  size,
  min,
  max,
  onChange,
  className = '',
}: NumberInputProps) {
  const id = `number-input-${useId()}`;
  const minValue = min ?? 0;
  const maxValue = max ?? 10000;
  const inputSize = size ?? 'medium';
  const padding = sizeSPaddings[inputSize];
  const onChangeProxy = (value: unknown) => {
    const castedValue = Number(value);
    const validCastedValue = isNaN(castedValue) ? 0 : castedValue;
    const validValue = Math.max(minValue, Math.min(validCastedValue, maxValue));
    const roundedValue = Math.round(validValue * 100) / 100;

    return onChange(roundedValue);
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => onChangeProxy(Number(e.target.value));
  const increment = () => onChangeProxy((value ?? 0) + 1);
  const decrement = () => onChangeProxy((value ?? 0) - 1);
  const buttonClassName = ['bg-slate-100', 'hover:bg-slate-200', 'border', 'border-slate-300', 'text-sm', padding];

  return (
    <div
      className={`
        text-black

        ${className}
      `}
    >
      {label !== undefined && (
        <Label
          htmlFor={id}
          label={label}
          className="mb-2"
        />
      )}
      <div
        className={`
          flex
          max-w-[8rem]
          items-center
        `}
      >
        <button
          type="button"
          onClick={decrement}
          className={`
            shadow

            ${buttonClassName.join(' ')}

            rounded-s-lg
          `}
        >
          -
        </button>
        <input
          type="number"
          id={id}
          name={id}
          autoFocus={autoFocus}
          onChange={handleChange}
          min={minValue}
          max={maxValue}
          className={`
            block
            border-y
            border-slate-300
            bg-slate-50
            text-center
            text-sm
            text-slate-700
            shadow

            focus:outline-none

            ${padding}
            ${sizeWidths[inputSize]}
          `}
          value={value}
        />
        <button
          type="button"
          onClick={increment}
          className={`
            ${buttonClassName.join(' ')}

            rounded-e-lg
            shadow
          `}
        >
          +
        </button>
      </div>
    </div>
  );
}
