type ButtonSize = 'small' | 'medium' | 'large';

interface CreateButtonProps {
  onClick: (e: React.MouseEvent) => void;
  children?: string | JSX.Element;
  size?: ButtonSize;
  isDisabled?: boolean;
  className?: string;
  tooltipText?: string;
}

const sizeStyles: Record<ButtonSize, string> = {
  small: 'px-2.5 py-1 rounded-md',
  medium: 'px-5 py-2.5 rounded-lg',
  large: 'px-5 py-2.5 rounded-lg',
};

export default function CreateButton({
  children,
  size,
  isDisabled,
  onClick,
  className,
  tooltipText,
}: CreateButtonProps) {
  const sizeStyle = sizeStyles[size ?? 'medium'];
  const stateStyle = isDisabled === true ? 'cursor-not-allowed bg-green-300' : 'shadow bg-green-500 hover:bg-green-700';

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
        shadow-green-900/50
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
