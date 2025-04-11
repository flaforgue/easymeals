import AnimatedIcon from '#/components/animated-icon';
import { Link } from 'react-router-dom';
import { useState } from 'react';

interface RoundedAddLinkButtonProps {
  to: string;
  hasIcon?: boolean;
  tooltipText?: string;
}

export default function RoundedAddLinkButton({ to, hasIcon, tooltipText }: RoundedAddLinkButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <Link
      to={to}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      data-tooltip-content={tooltipText}
      data-tooltip-id="global"
      className={`
        animate-pulse-shadow
        flex
        h-max
        w-max
        items-center
        justify-center
        overflow-hidden
        rounded-full
        bg-green-500
        p-4
        text-sm
        font-medium
        text-white
        shadow-lg
        transition-all
        duration-75
        ease-in
      `}
    >
      {hasIcon !== false && (
        <div
          className={`
            h-6
            w-6
          `}
        >
          <AnimatedIcon
            icon="add"
            isPlaying={isHovered}
          />
        </div>
      )}
    </Link>
  );
}
