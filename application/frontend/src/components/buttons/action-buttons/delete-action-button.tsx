import AnimatedIcon, { AnimatedIconName } from '#/components/animated-icon';
import { useState } from 'react';

type ButtonSize = 'tiny' | 'small' | 'medium' | 'large';
const sizeStyles: Record<ButtonSize, string> = {
  tiny: 'p-0.5',
  small: 'px-2.5 py-1',
  medium: 'px-4 py-2',
  large: 'px-5 py-2.5',
};

interface DeleteActionButtonProps {
  onClick: (e: React.MouseEvent) => void;
  icon: AnimatedIconName;
  size?: ButtonSize;
  tooltipText?: string;
  className?: string;
}

export default function DeleteActionButton({
  onClick,
  size,
  icon,
  tooltipText = 'Supprimer',
  className = '',
}: DeleteActionButtonProps) {
  const padding = sizeStyles[size ?? 'medium'];
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <button
      onClick={onClick}
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
        border-rose-500
        bg-white
        text-sm
        font-medium
        text-rose-500
        transition-all
        duration-75
        ease-in

        hover:bg-rose-500
        hover:text-white

        ${padding}
        ${className}
      `}
    >
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
    </button>
  );
}
