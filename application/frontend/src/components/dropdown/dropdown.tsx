import DropdownOptionButton from '#/components/dropdown/dropdown-option-button';
import DropdownOptionLink from '#/components/dropdown/dropdown-option-link';
import { useGlobalClickHandler } from '#/hooks/use-global-click-handler';
import { useKeydownHandler } from '#/hooks/use-keydown-handler';
import { useKeyupHandler } from '#/hooks/use-keyup-handler';
import { stopPropagation } from '#/utils/events';
import { ReactNode, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface BaseDropdownOption {
  children: ReactNode;
  className?: string;
}

export interface ButtonDropdownOption extends BaseDropdownOption {
  onClick: () => void;
  to?: never;
}

export interface LinkDropdownOption extends BaseDropdownOption {
  to: string;
  isActive: boolean;
  onClick?: never;
}

function isLink(dropdownOption: DropdownOption): dropdownOption is LinkDropdownOption {
  return dropdownOption.to !== undefined;
}

function isButton(dropdownOption: DropdownOption): dropdownOption is ButtonDropdownOption {
  return dropdownOption.onClick !== undefined;
}

export type DropdownOption = ButtonDropdownOption | LinkDropdownOption;

interface DropdownProps {
  isVisible: boolean;
  options: DropdownOption[];
  closeHandler: () => void;
}

export default function Dropdown({ isVisible, options, closeHandler }: DropdownProps) {
  const navigate = useNavigate();
  const [focusedIndex, setFocusedIndex] = useState(-1);
  useGlobalClickHandler(closeHandler);
  useKeyupHandler('Escape', closeHandler);

  useKeyupHandler('Enter', () => {
    const option = options[focusedIndex];
    if (option === undefined) {
      return;
    }

    if (isButton(option)) {
      option.onClick();
    }

    if (isLink(option)) {
      navigate(option.to);
    }
  });
  useKeydownHandler('ArrowUp', (e: KeyboardEvent) => {
    e.preventDefault();
    setFocusedIndex(Math.min(options.length, focusedIndex - 1));
  });
  useKeydownHandler('ArrowDown', (e: KeyboardEvent) => {
    e.preventDefault();
    setFocusedIndex(Math.max(0, focusedIndex + 1));
  });

  if (!isVisible) {
    return undefined;
  }

  return (
    <div
      onClick={stopPropagation}
      className={`
        absolute
        z-10
        max-h-60
        w-full
        overflow-scroll
        rounded-lg
        bg-white
        shadow
      `}
    >
      <ul
        className={`
          py-2
          text-sm
          text-slate-700
        `}
      >
        {options.map((option, i) => (
          <li
            key={i}
            onMouseEnter={() => setFocusedIndex(i)}
          >
            {isButton(option) && (
              <DropdownOptionButton
                option={option}
                isFocused={i === focusedIndex}
              >
                {option.children}
              </DropdownOptionButton>
            )}
            {isLink(option) && (
              <DropdownOptionLink
                option={option}
                isFocused={i === focusedIndex}
                isActive={option.isActive}
                closeHandler={closeHandler}
              >
                {option.children}
              </DropdownOptionLink>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
