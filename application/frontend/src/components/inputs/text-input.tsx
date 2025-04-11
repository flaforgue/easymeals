import { ChangeEvent, useId } from 'react';
import Label from '#/components/label';

interface TextInputProps {
  label?: string;
  placeholder?: string;
  autoFocus?: true;
  value?: string;
  onChange: (v: string) => void;
  className?: string;
  inputClassName?: string;
}

export default function TextInput({
  label,
  placeholder,
  autoFocus,
  value,
  onChange,
  className = '',
  inputClassName = '',
}: TextInputProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value);
  const id = `text-input-${useId()}`;

  return (
    <div
      className={`
        ${className ?? ''}
      `}
    >
      {label !== undefined && (
        <Label
          htmlFor={id}
          label={label}
          className="mb-2"
        />
      )}
      <input
        type="text"
        name={id}
        id={id}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        autoComplete="off"
        autoFocus={autoFocus ?? false}
        className={`
          block
          w-full
          rounded-lg
          border
          border-slate-200
          bg-white
          p-2.5
          px-4
          text-sm
          text-slate-900
          shadow

          focus:border-sky-500
          focus:ring-sky-500

          ${inputClassName}
        `}
      />
    </div>
  );
}
