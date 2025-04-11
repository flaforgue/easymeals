import AnimatedIcon, { AnimatedIconName } from '#/components/animated-icon';
import { HTMLAttributeAnchorTarget, useState } from 'react';
import { Link } from 'react-router-dom';

type Size = 'medium' | 'large';
const sizeStyles: Record<Size, string> = {
  medium: 'h-5 w-5',
  large: 'h-6 w-6',
};

interface DefaultIconButtonProps {
  icon?: AnimatedIconName;
  tooltipText?: string;
  className?: string;
  size?: Size;
}

interface DefaultIconButtonButtonProps extends DefaultIconButtonProps {
  to?: undefined;
  target?: undefined;
  onClick: () => void;
}

interface DefaultIconButtonLinkProps extends DefaultIconButtonProps {
  to: string;
  target?: HTMLAttributeAnchorTarget;
  onClick?: undefined;
}

export default function DefaultIconButton({
  to = undefined,
  onClick = undefined,
  icon = 'add',
  tooltipText = 'Ajouter',
  className = '',
  size = 'medium',
  target = '_self',
}: DefaultIconButtonButtonProps | DefaultIconButtonLinkProps) {
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const handleMouseEnter = () => setIsButtonHovered(true);
  const handleMouseLeave = () => setIsButtonHovered(false);

  const classNames = [
    'align-text-bottom',
    'rounded',
    'py-1',
    'px-1.5',
    'text-slate-400',
    'hover:bg-slate-400',
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
        target={target}
      >
        {children}
      </Link>
    );

  return component;
}
