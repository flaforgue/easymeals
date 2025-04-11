import DefaultButton, { ButtonSize } from '#/components/buttons/simple-buttons/default-button';
import CheckboxInput from '#/components/inputs/checkbox-input';

interface BooleanInputProps {
  children?: JSX.Element;
  autoFocus?: true;
  value: boolean;
  onChange: (v: boolean) => void;
  size?: ButtonSize;
  className?: string;
}

export default function BooleanInput({
  children,
  value,
  onChange,
  className = '',
  size = 'medium',
}: BooleanInputProps) {
  const toggle = () => onChange(!value);

  return (
    <div
      className={`
        flex
        w-full
        min-w-fit
        items-end

        ${className}
      `}
    >
      <DefaultButton
        onClick={toggle}
        size={size}
        className="w-full"
      >
        <div
          className={`
            flex
            items-center
            justify-between
            gap-2
          `}
        >
          {children}

          <CheckboxInput value={value} />
        </div>
      </DefaultButton>
    </div>
  );
}
