import { ButtonDropdownOption } from '#/components/dropdown/dropdown';
import { ReactNode } from 'react';

interface DropdownOptionButtonProps {
  isFocused: boolean;
  option: ButtonDropdownOption;
  children: ReactNode;
}

export default function DropdownOptionButton({ isFocused, option, children }: DropdownOptionButtonProps) {
  return (
    <button
      type="button"
      onClick={() => option.onClick?.()}
      className={`
        inline-flex
        w-full
        px-4
        py-2
        text-sm
        transition-all
        duration-75
        ease-in

        ${isFocused ? `bg-slate-100` : ''}
        ${option.className ?? `text-slate-700`}
      `}
    >
      {children}
    </button>
  );
}
