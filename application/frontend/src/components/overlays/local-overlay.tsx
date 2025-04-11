interface LocalOverlayProps {
  children?: JSX.Element;
  tooltipText?: string;
  className?: string;
  onClick?: () => void;
  isActive?: boolean;
}

export default function LocalOverlay({
  children,
  tooltipText,
  className = '',
  onClick,
  isActive = false,
}: LocalOverlayProps) {
  return (
    <div
      onClick={onClick}
      data-tooltip-id="global"
      data-tooltip-content={tooltipText}
      className={`
        align-center
        absolute
        inset-0
        flex
        cursor-pointer
        items-center
        justify-center
        bg-slate-700
        bg-opacity-0
        opacity-0
        transition-opacity

        hover:bg-opacity-30
        hover:opacity-100

        ${
          isActive
            ? `
              bg-opacity-30
              opacity-100
            `
            : ''
        }
        ${className}
      `}
    >
      {children}
    </div>
  );
}
