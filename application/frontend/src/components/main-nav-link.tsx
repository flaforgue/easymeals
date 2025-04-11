import AnimatedIcon, { AnimatedIconName } from '#/components/animated-icon';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface MainNavLinkProps {
  to: string;
  label: string;
  icon: AnimatedIconName;
}
export default function MainNavLink({ to, label, icon }: MainNavLinkProps) {
  const currentPathname = useLocation().pathname;
  const isActive = currentPathname.indexOf(to) !== -1;
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <Link
      to={to}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`
        flex
        flex-col
        items-center
        justify-center
        gap-x-1
        rounded-lg
        p-2
        transition-all
        duration-75
        ease-in-out

        laptop:flex-row
        laptop:justify-start

        ${
          isActive === true
            ? `
              bg-slate-100
              text-sky-700
            `
            : `
              text-slate-300

              hover:text-white
            `
        }
      `}
    >
      <div
        className={`
          h-10
          w-10
          p-1

          laptop:h-5
          laptop:w-5
          laptop:p-0
        `}
      >
        <AnimatedIcon
          icon={icon}
          isPlaying={!isActive && isHovered}
        />
      </div>
      <span
        className={`
          hidden
          text-center
          text-[10px]

          tablet:inline

          laptop:text-left
          laptop:text-base
        `}
      >
        {label}
      </span>
    </Link>
  );
}
