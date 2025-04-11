export type ButtonSize = 'small' | 'medium' | 'large';

interface DefaultButtonProps {
  size?: ButtonSize;
  className?: string;
  onClick: (e: React.MouseEvent) => void;
  children?: string | JSX.Element;
  isDisabled?: boolean;
  tooltipText?: string;
}

const sizeStyles: Record<ButtonSize, string> = {
  small: 'px-2.5 py-1',
  medium: 'px-5 py-2.5',
  large: 'px-5 py-2.5',
};

export default function DefaultButton({
  size,
  className,
  onClick,
  children,
  isDisabled,
  tooltipText,
}: DefaultButtonProps) {
  const padding = sizeStyles[size ?? 'medium'];
  const style =
    isDisabled === true
      ? `
        cursor-not-allowed
        border-slate-100
        text-slate-300
      `
      : `
        border-slate-200
        text-slate-500

        hover:bg-slate-100
        hover:text-slate-900
      `;

  return (
    <button
      onClick={onClick}
      disabled={isDisabled === true}
      type="button"
      data-tooltip-id="global"
      data-tooltip-content={tooltipText}
      className={`
        rounded-lg
        border
        bg-white
        text-sm
        font-medium
        shadow
        transition-all

        ${style}
        ${padding}
        ${className ?? ''}
      `}
    >
      {children}
    </button>
  );
}
