import AnimatedIcon, { AnimatedIconName } from '#/components/animated-icon';
import { Link } from 'react-router-dom';
import { useState } from 'react';

interface DeleteLinkButtonProps {
  to: string;
  icon?: AnimatedIconName;
  target?: string;
  isDisabled?: boolean;
  tooltipText?: string;
  text?: string;
}

export default function DeleteLinkButton({
  to,
  icon,
  target,
  tooltipText,
  text,
  isDisabled = false,
}: DeleteLinkButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  const onClick = (e: React.MouseEvent) => {
    if (isDisabled) {
      e.preventDefault();
    }

    e.stopPropagation();
  };

  return (
    <Link
      to={isDisabled ? '#' : to}
      data-tooltip-content={tooltipText}
      data-tooltip-id="global"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      target={target}
      className={`
        inline-flex
        h-full
        items-center
        justify-center
        overflow-hidden
        rounded-lg
        border-2
        px-4
        py-2
        text-sm
        font-medium
        transition-all
        duration-75
        ease-in

        ${
          isDisabled
            ? `
              cursor-not-allowed
              border-rose-300
              bg-white
              text-rose-300
            `
            : `
              border-rose-500
              bg-rose-500
              text-white

              hover:bg-rose-500
              hover:text-white
            `
        }
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
            isPlaying={isHovered && !isDisabled}
          />
        </div>
      )}
      {text ?? ''}
    </Link>
  );
}
