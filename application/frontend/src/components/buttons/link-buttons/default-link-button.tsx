import AnimatedIcon, { AnimatedIconName } from '#/components/animated-icon';
import { Link } from 'react-router-dom';
import { ReactNode, useState } from 'react';

interface DefaultLinkButtonProps {
  to: string;
  icon?: AnimatedIconName;
  target?: string;
  isDisabled?: boolean;
  tooltipText?: string;
  children?: ReactNode;
  className?: string;
}

export default function DefaultLinkButton({
  to,
  icon,
  target,
  tooltipText,
  children,
  isDisabled = false,
  className = '',
}: DefaultLinkButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  const onClick = (e: React.MouseEvent) => {
    if (isDisabled) {
      e.preventDefault();
    }

    e.stopPropagation();
  };

  const style = isDisabled
    ? `
      cursor-not-allowed
      border-slate-100
      bg-slate-100
      text-slate-300
    `
    : `
      border-slate-300
      bg-white
      text-slate-500
      shadow

      hover:border-slate-400
      hover:bg-slate-400
      hover:text-white
    `;

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
        min-w-fit
        items-center
        justify-center
        gap-2
        overflow-hidden
        rounded-lg
        border
        px-4
        py-2
        text-sm
        font-medium
        transition-all
        duration-75
        ease-in

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
            isPlaying={isHovered && !isDisabled}
          />
        </div>
      )}
      {children}
    </Link>
  );
}
