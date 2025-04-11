import { ChangeEvent, useId } from 'react';
import Label from '#/components/label';

type InputSize = 'tiny' | 'small' | 'medium';

const inputPaddings: Record<InputSize, string> = {
  tiny: 'px-1.5',
  small: 'px-2.5 py-1',
  medium: 'p-1',
};

const buttonPaddings: Record<InputSize, string> = {
  tiny: 'px-1.5',
  small: 'px-2.5 py-1',
  medium: 'p-2.5',
};

const sizeMinWidths: Record<InputSize, string> = {
  tiny: 'min-w-8',
  small: 'min-w-16',
  medium: 'min-w-16',
};

interface LabeledNumberInputProps {
  label?: string;
  autoFocus?: true;
  innerLabel: string;
  value: number;
  size?: InputSize;
  min?: number;
  max?: number;
  incrementValue?: number;
  onChange: (v: number) => void;
}

export default function LabeledNumberInput({
  label,
  innerLabel,
  autoFocus,
  value,
  size,
  min,
  max,
  onChange,
  incrementValue = 1,
}: LabeledNumberInputProps) {
  const id = `number-input-${useId()}`;
  const minValue = min ?? 0;
  const maxValue = max ?? 10000;
  const inputSize = size ?? 'medium';
  const buttonPadding = buttonPaddings[inputSize];
  const onChangeProxy = (value: unknown) => {
    const castedValue = Number(value);
    const validCastedValue = isNaN(castedValue) ? 0 : castedValue;
    const validValue = Math.max(0, Math.min(validCastedValue, maxValue));
    const roundedValue = Math.round(validValue * 100) / 100;

    return onChange(roundedValue);
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => onChangeProxy(Number(e.target.value));
  const increment = () => onChangeProxy((value ?? 0) + incrementValue);
  const decrement = () => onChangeProxy((value ?? 0) - incrementValue);
  const buttonClassName = [
    'bg-slate-100',
    'hover:bg-slate-200',
    'border',
    'border-slate-300',
    'text-sm',
    buttonPadding,
  ];
  const isIncrementValueCustom = incrementValue !== 1;

  return (
    <div className="text-black">
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
          data-tooltip-id="global"
          data-tooltip-content={isIncrementValueCustom ? `- ${incrementValue}` : ''}
          className={`
            ${buttonClassName.join(' ')}

            h-fit
            rounded-s-lg
            shadow
          `}
        >
          -
        </button>
        <div
          className={`
            flex
            flex-col
          `}
        >
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
              h-[24px]
              w-full
              border-t
              border-slate-300
              bg-slate-50
              text-center
              text-[10px]
              text-slate-700
              shadow

              focus:outline-none

              ${inputPaddings[inputSize]}
              ${sizeMinWidths[inputSize]}
            `}
            value={value}
          />
          <span
            className={`
              h-[18px]
              w-16
              border-y
              border-slate-300
              bg-slate-100
              px-2
              text-center
              text-[8px]
              shadow
            `}
          >
            {innerLabel}
          </span>
        </div>
        <button
          type="button"
          onClick={increment}
          data-tooltip-id="global"
          data-tooltip-content={isIncrementValueCustom ? `+ ${incrementValue}` : ''}
          className={`
            ${buttonClassName.join(' ')}

            h-fit
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
