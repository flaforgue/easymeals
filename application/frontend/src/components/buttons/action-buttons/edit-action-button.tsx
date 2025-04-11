import AnimatedIcon, { AnimatedIconName } from '#/components/animated-icon';
import { useState } from 'react';

type ButtonSize = 'small' | 'medium' | 'large';
const sizeStyles: Record<ButtonSize, string> = {
  small: 'px-2.5 py-1',
  medium: 'px-4 py-2',
  large: 'px-5 py-2.5',
};

interface EditActionButtonProps {
  onClick: (e: React.MouseEvent) => void;
  icon?: AnimatedIconName;
  isDisabled?: boolean;
  label?: string;
  tooltipText?: string;
  size?: ButtonSize;
  className?: string;
}

export default function EditActionButton({
  onClick,
  icon,
  isDisabled,
  label,
  tooltipText,
  size = 'medium',
  className = '',
}: EditActionButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  const padding = sizeStyles[size];
  const style =
    isDisabled === true
      ? `
        cursor-not-allowed
        border-sky-300
        text-sky-300
      `
      : `
        border-sky-500
        text-sky-500

        hover:bg-sky-500
        hover:text-white
      `;
  const iconStyle = isDisabled === true ? '' : 'text-sky-500 hover:text-white';

  return (
    <button
      onClick={onClick}
      disabled={isDisabled === true}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      data-tooltip-content={tooltipText}
      data-tooltip-id="global"
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
            className={iconStyle}
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
