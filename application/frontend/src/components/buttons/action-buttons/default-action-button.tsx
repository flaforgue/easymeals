import AnimatedIcon, { AnimatedIconName } from '#/components/animated-icon';
import { useState } from 'react';

type ButtonSize = 'tiny' | 'small' | 'medium' | 'large';
const sizeStyles: Record<ButtonSize, string> = {
  tiny: 'p-1',
  small: 'px-2.5 py-1',
  medium: 'px-4 py-2',
  large: 'px-5 py-2.5',
};

interface DefaultActionButtonProps {
  onClick: (e: React.MouseEvent) => void;
  icon?: AnimatedIconName;
  isDisabled?: boolean;
  tooltipText?: string;
  isCompact?: boolean;
  size?: ButtonSize;
  className?: string;
  label?: string;
}

export default function DefaultActionButton({
  onClick,
  icon,
  isDisabled,
  tooltipText,
  label,
  size = 'medium',
  className = '',
}: DefaultActionButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  const padding = sizeStyles[size ?? 'medium'];
  const style =
    isDisabled === true
      ? `
        cursor-not-allowed
        border-slate-200
        text-slate-200
      `
      : `
        border-slate-400
        text-slate-400

        hover:bg-slate-400
        hover:text-white
      `;

  return (
    <button
      onClick={onClick}
      disabled={isDisabled === true}
      data-tooltip-content={tooltipText}
      data-tooltip-id="global"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`
        inline-flex
        items-center
        justify-center
        overflow-hidden
        rounded-lg
        border-2
        bg-white
        text-sm
        font-medium
        transition-all
        duration-75
        ease-in

        ${padding}
        ${style}
        ${className}
      `}
    >
      {icon !== undefined && (
        <div
          className={`
            h-5
            w-5
          `}
        >
          <AnimatedIcon
            icon={icon}
            isPlaying={isHovered}
          />
        </div>
      )}
      {label !== undefined && (
        <span
          className={`
            ml-2

            ${isHovered ? 'text-white' : ''}
          `}
        >
          {label}
        </span>
      )}
    </button>
  );
}
