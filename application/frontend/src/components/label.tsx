interface LabelProps {
  htmlFor?: string;
  label: string;
  className?: string;
}

export default function Label({ htmlFor, label, className }: LabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className={`
        block
        text-sm
        font-medium
        text-slate-700

        ${className ?? ''}
      `}
    >
      {label}
    </label>
  );
}
