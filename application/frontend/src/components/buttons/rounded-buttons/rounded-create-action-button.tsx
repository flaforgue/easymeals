import AnimatedIcon, { AnimatedIconName } from '#/components/animated-icon';
import { useState } from 'react';

type ButtonSize = 'small' | 'medium' | 'large';
const sizeStyles: Record<ButtonSize, string> = {
  small: 'p-0',
  medium: 'p-2',
  large: 'p-4',
};

interface RoundedCreateActionButtonProps {
  onClick: (e: React.MouseEvent) => void;
  icon?: AnimatedIconName;
  isDisabled?: boolean;
  tooltipText?: string;
  size?: ButtonSize;
}

export default function RoundedCreateActionButton({
  onClick,
  icon,
  isDisabled,
  tooltipText,
  size = 'large',
}: RoundedCreateActionButtonProps) {
  const sizeStyle = sizeStyles[size];
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  const colorStyle = isDisabled === true ? 'bg-green-200 cursor-not-allowed' : 'bg-green-500 hover:bg-green-600';

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
        rounded-full
        text-white
        shadow-lg
        transition-all
        duration-75
        ease-in

        ${sizeStyle}
        ${colorStyle}
      `}
    >
      {icon !== undefined && (
        <div
          className={`
            h-6
            w-6
          `}
        >
          <AnimatedIcon
            icon={icon}
            isPlaying={isHovered}
          />
        </div>
      )}
    </button>
  );
}
