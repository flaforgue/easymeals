import { ChangeEvent, useEffect, useId, useRef } from 'react';
import Label from '#/components/label';

interface TextareaInputProps {
  onChange: (v: string) => void;
  value?: string;
  label?: string;
  placeholder?: string;
  rows?: number;
  className?: string;
}

export default function TextareaInput({
  label,
  placeholder,
  value,
  onChange,
  rows = 2,
  className,
}: TextareaInputProps) {
  const id = `textarea-input-${useId()}`;
  const textareRef = useRef<HTMLTextAreaElement>(null);
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => onChange(e.target.value);
  useEffect(() => {
    if (textareRef.current !== null) {
      textareRef.current.style.height = 'auto';
      textareRef.current.style.height = `${textareRef.current.scrollHeight}px`;
    }
  }, [value]);

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
      <textarea
        ref={textareRef}
        name={id}
        id={id}
        rows={rows}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className={`
          block
          w-full
          overflow-y-hidden
          rounded-lg
          border
          bg-white
          p-2.5
          px-4
          text-sm
          text-slate-900

          focus:border-sky-500
          focus:ring-sky-500
        `}
      />
    </div>
  );
}
