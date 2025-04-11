import { useId } from 'react';

interface DurationInputProps {
  value: number;
  onChange: (v: number) => void;
  min?: number;
  max?: number;
}
export default function DurationInput({ value, onChange, min = 0, max = 999 }: DurationInputProps) {
  const id = `number-input-${useId()}`;
  const onChangeProxy = (value: number) => {
    return onChange(Math.round(Math.min(Math.max(min, value), max)));
  };
  const increment = () => onChangeProxy(value + 1);
  const decrement = () => onChangeProxy(value - 1);
  const isMinValue = value === min;
  const baseButtonClassName = ['border', 'text-xl', 'text-center', 'shadow', 'h-fit', 'px-4', 'py-0.5'];
  const buttonClassName = ['bg-slate-100', 'hover:bg-slate-200', 'border-slate-300', 'text-slate-500'];
  const disabledButtonClassName = ['bg-slate-50', 'cursor-not-allowed', 'border-slate-200', 'text-slate-300'];

  return (
    <div className="w-36">
      <div
        className={`
          flex
          items-end
          justify-center
        `}
      >
        <button
          type="button"
          disabled={isMinValue}
          onClick={decrement}
          className={`
            ${baseButtonClassName.join(' ')}
            ${(isMinValue ? disabledButtonClassName : buttonClassName).join(' ')}

            rounded-tl-lg
          `}
        >
          -
        </button>
        <div
          className={`
            h-[34px]
            w-full
            border-y
            text-center
            text-xl

            ${value <= 0 ? `border-slate-200` : `border-slate-300`}

            bg-slate-50
          `}
        >
          <span
            className={`
              ${isMinValue ? 'opacity-30' : ''}
            `}
          >
            🕑
          </span>
        </div>
        <button
          type="button"
          disabled={value >= max}
          onClick={increment}
          className={`
            ${baseButtonClassName.join(' ')}
            ${(value >= max ? disabledButtonClassName : buttonClassName).join(' ')}

            rounded-tr-lg
          `}
        >
          +
        </button>
      </div>
      <input
        id={id}
        type="number"
        min="0"
        max="999"
        value={value}
        onChange={(e) => onChangeProxy(e.target.valueAsNumber)}
        className={`
          w-full
          rounded-b-lg
          border-b
          border-l
          border-r
          bg-slate-50
          px-2
          py-0.5
          text-center

          ${value > 0 ? `text-slate-700` : `text-slate-300`}
        `}
      />
    </div>
  );
}
