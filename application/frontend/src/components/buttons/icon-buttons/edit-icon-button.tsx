import AnimatedIcon, { AnimatedIconName } from '#/components/animated-icon';
import { useState } from 'react';
import { Link } from 'react-router-dom';

type Size = 'medium' | 'large';
const sizeStyles: Record<Size, string> = {
  medium: 'h-5 w-5',
  large: 'h-6 w-6',
};

interface EditIconButtonProps {
  icon?: AnimatedIconName;
  tooltipText?: string;
  className?: string;
  size?: Size;
}

interface EditIconButtonButtonProps extends EditIconButtonProps {
  to?: undefined;
  onClick: (e: React.MouseEvent) => void;
}

interface EditIconButtonLinkProps extends EditIconButtonProps {
  to: string;
  onClick?: undefined;
}

export default function EditIconButton({
  to = undefined,
  onClick = undefined,
  icon = 'edit',
  tooltipText = 'Modifier',
  className = '',
  size = 'medium',
}: EditIconButtonButtonProps | EditIconButtonLinkProps) {
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const handleMouseEnter = () => setIsButtonHovered(true);
  const handleMouseLeave = () => setIsButtonHovered(false);

  const classNames = [
    'block',
    'align-text-bottom',
    'rounded',
    'py-1',
    'px-1.5',
    'text-sky-500',
    'hover:bg-sky-500',
    'hover:text-white',
    className,
  ].join(' ');
  const children = (
    <div className={sizeStyles[size]}>
      <AnimatedIcon
        icon={icon}
        isPlaying={isButtonHovered}
      />
    </div>
  );
  const props = {
    className: classNames,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    'data-tooltip-content': tooltipText,
    'data-tooltip-id': 'global',
  };
  const component =
    to === undefined ? (
      <button
        {...props}
        onClick={onClick}
      >
        {children}
      </button>
    ) : (
      <Link
        {...props}
        to={to}
      >
        {children}
      </Link>
    );

  return component;
}
