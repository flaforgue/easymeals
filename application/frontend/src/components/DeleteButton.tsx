'use client';

import AnimatedIcon from './AnimatedIcon';
import { useState } from 'react';

interface DeleteButtonProps {
  onClick?: () => void;
}

export default function DeleteButton({
  onClick,
}: DeleteButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="
        relative
        inline-flex
        items-center
        justify-center
        p-0.5
        mb-2
        me-2
        overflow-hidden
        text-sm
        font-medium
        text-gray-900
        rounded-lg
        group
        bg-gradient-to-br
        from-pink-500
        to-orange-400
        group-hover:from-pink-500
        group-hover:to-orange-400
        focus:outline-none
      "
    >
      <span className="
        relative
        px-2.5
        py-1
        transition-all
        ease-in
        duration-75
      bg-white
      dark:bg-gray-900
        rounded-md
        group-hover:bg-opacity-0
      ">
        <AnimatedIcon
          icon="trash"
          size={20}
          isPlaying={isHovered}
        />
      </span>
    </button>
  );
}