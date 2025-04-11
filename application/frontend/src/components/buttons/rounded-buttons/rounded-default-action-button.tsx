import AnimatedIcon, { AnimatedIconName } from '#/components/animated-icon';
import { useState } from 'react';

interface RoundedDefaultActionButtonProps {
  onClick: (e: React.MouseEvent) => void;
  icon?: AnimatedIconName;
  label?: string;
  isDisabled?: boolean;
}

export default function RoundedDefaultActionButton({
  onClick,
  icon,
  label,
  isDisabled,
}: RoundedDefaultActionButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
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
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`
        inline-flex
        h-max
        w-max
        items-center
        justify-center
        overflow-hidden
        rounded-full
        border-2
        bg-white
        p-[calc(1rem-2px)]
        text-sm
        font-medium
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
