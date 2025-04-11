import DefaultButton from '#/components/buttons/simple-buttons/default-button';
import Dropdown, { DropdownOption } from '#/components/dropdown/dropdown';
import IconCaretDown from '#/components/icons/icon-caret-down';
import IconCaretUp from '#/components/icons/icon-caret-up';
import { useState } from 'react';

interface FiltersDropdownProps {
  dropdownOptions: DropdownOption[];
  className?: string;
}
export default function FiltersDropdown({ dropdownOptions, className = '' }: FiltersDropdownProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsDropdownOpen(!isDropdownOpen);
  };
  const closeDropdown = () => setIsDropdownOpen(false);

  return (
    <div
      className={`
        relative
        min-w-56

        ${className}
      `}
    >
      <DefaultButton
        onClick={toggleDropdown}
        className="w-full"
      >
        <div
          className={`
            flex
            items-center
            justify-between
            gap-4
          `}
        >
          <div
            className={`
              flex
              items-center
              gap-4
            `}
          >
            <img
              width="18"
              src="/icons/filters.png"
            />
            Plus de filtres
          </div>
          <div className="h-1.5">{isDropdownOpen ? <IconCaretUp /> : <IconCaretDown />}</div>
        </div>
      </DefaultButton>
      <Dropdown
        isVisible={isDropdownOpen}
        options={dropdownOptions}
        closeHandler={closeDropdown}
      />
    </div>
  );
}
