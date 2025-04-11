import AnimatedIcon, { AnimatedIconName } from '#/components/animated-icon';
import { useState } from 'react';

interface RoundedEditActionButtonProps {
  onClick: (e: React.MouseEvent) => void;
  icon?: AnimatedIconName;
  isDisabled?: boolean;
}

export default function RoundedEditActionButton({ onClick, icon, isDisabled }: RoundedEditActionButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  const style =
    isDisabled === true
      ? `
        cursor-not-allowed
        bg-sky-300
      `
      : `
        bg-sky-500

        hover:bg-sky-600
      `;

  return (
    <button
      onClick={onClick}
      disabled={isDisabled === true}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`
        inline-flex
        items-center
        justify-center
        overflow-hidden
        rounded-full
        p-4
        font-medium
        text-white
        shadow-lg
        transition-all
        duration-75
        ease-in

        ${style}
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
