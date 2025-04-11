import AnimatedIcon from '#/components/animated-icon';
import { useState } from 'react';

type Size = 'medium' | 'large';
const sizeStyles: Record<Size, string> = {
  medium: 'h-5 w-5',
  large: 'h-6 w-6',
};

interface DeleteIconButtonProps {
  onClick: (e: React.MouseEvent) => void;
  className?: string;
  size?: Size;
}

export default function DeleteIconButton({ onClick, className = '', size = 'medium' }: DeleteIconButtonProps) {
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const handleMouseEnter = () => setIsButtonHovered(true);
  const handleMouseLeave = () => setIsButtonHovered(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`
        h-fit
        rounded
        px-1.5
        py-1
        align-text-bottom
        text-rose-500

        hover:bg-rose-500
        hover:text-white

        ${className}
      `}
      data-tooltip-id="global"
      data-tooltip-content="Supprimer"
    >
      <div className={sizeStyles[size]}>
        <AnimatedIcon
          icon="trash"
          isPlaying={isButtonHovered}
        />
      </div>
    </button>
  );
}
