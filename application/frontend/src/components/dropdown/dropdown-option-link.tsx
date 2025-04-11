import { LinkDropdownOption } from '#/components/dropdown/dropdown';
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface DropdownOptionLinkProps {
  isFocused: boolean;
  isActive: boolean;
  option: LinkDropdownOption;
  children: ReactNode;
  closeHandler: () => void;
}

export default function DropdownOptionLink({
  isFocused,
  isActive,
  option,
  children,
  closeHandler,
}: DropdownOptionLinkProps) {
  return (
    <Link
      to={option.to}
      onClick={closeHandler}
      className={`
        inline-flex
        w-full
        items-center
        px-4
        py-2
        text-sm
        transition-all
        duration-75
        ease-in

        ${isFocused ? `bg-slate-100` : ''}
        ${option.className ?? `text-slate-700`}
        ${
          isActive
            ? `
              font-black
              text-black
            `
            : ''
        }
      `}
    >
      {children}
    </Link>
  );
}
