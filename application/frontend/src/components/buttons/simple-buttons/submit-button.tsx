type ButtonSize = 'small' | 'medium' | 'large';

interface SubmitButtonProps {
  children: string | JSX.Element;
  size?: ButtonSize;
  isDisabled?: boolean;
  onClick: (e: React.MouseEvent) => void;
  tooltipText?: string;
  className?: string;
}

const sizeStyles: Record<ButtonSize, string> = {
  small: 'px-2.5 py-1 rounded-md',
  medium: 'px-5 py-2.5 rounded-lg',
  large: 'px-5 py-2.5 rounded-lg',
};

export default function SubmitButton({
  children,
  size,
  isDisabled,
  onClick,
  tooltipText,
  className,
}: SubmitButtonProps) {
  const sizeStyle = sizeStyles[size ?? 'medium'];
  const stateStyle = isDisabled === true ? 'cursor-not-allowed bg-sky-300' : 'shadow bg-sky-500 hover:bg-sky-700';

  return (
    <button
      onClick={onClick}
      type="button"
      disabled={isDisabled}
      data-tooltip-content={tooltipText}
      data-tooltip-id="global"
      className={`
        items-center
        text-center
        text-sm
        font-medium
        text-white
        shadow-sky-900/50
        transition-all
        duration-75
        ease-in

        ${sizeStyle}
        ${stateStyle}
        ${className ?? ''}
      `}
    >
      {children}
    </button>
  );
}
