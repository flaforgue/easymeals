import AnimatedIcon, { AnimatedIconName } from '#/components/animated-icon';
import { Link } from 'react-router-dom';
import { useState } from 'react';

interface EditLinkButtonProps {
  to: string;
  icon?: AnimatedIconName;
  target?: string;
  isDisabled?: boolean;
  text?: string;
  tooltipText?: string;
  className?: string;
}

export default function EditLinkButton({
  to,
  icon,
  target,
  tooltipText,
  text,
  isDisabled = false,
  className = '',
}: EditLinkButtonProps) {
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
        w-max
        min-w-fit
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

        ${className}
        ${
          isDisabled
            ? `
              cursor-not-allowed
              border-sky-300
              bg-white
              text-sky-300
            `
            : `
              border-sky-500
              bg-white
              text-sky-500

              hover:bg-sky-500
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
      {text !== undefined && <span className="ml-2">{text}</span>}
    </Link>
  );
}
