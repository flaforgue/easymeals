import DefaultButton from '#/components/buttons/simple-buttons/default-button';
import Dropdown, { DropdownOption } from '#/components/dropdown/dropdown';
import DropdownOptionChild from '#/components/dropdown/dropdown-option-child';
import IconCaretDown from '#/components/icons/icon-caret-down';
import IconCaretUp from '#/components/icons/icon-caret-up';
import Label from '#/components/label';
import { useState } from 'react';

export interface SelectOption<T> {
  value: T;
  label: string;
  illustrationUrl?: string;
}

interface SelectInputProps<T> {
  options: SelectOption<T>[];
  label?: string;
  value: T;
  onChange: (v: T) => void;
  className?: string;
}

export default function SelectInput<T>({ options, label, value, onChange, className }: SelectInputProps<T>) {
  const [isDropdownVisible, setIsDropdownVisible] = useState<boolean>(false);
  const closeDropdown = () => setIsDropdownVisible(false);
  const handleButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsDropdownVisible(!isDropdownVisible);
  };

  const activeOption = options.find((o) => o.value === value);
  const dropdownOptions = options.map((o): DropdownOption => {
    return {
      children: (
        <DropdownOptionChild
          isActive={o.value === value}
          label={o.label}
          illustrationUrl={o.illustrationUrl}
        />
      ),
      onClick: () => {
        onChange(o.value);
        setIsDropdownVisible(false);
      },
    };
  });

  return (
    <div
      className={`
        ${className ?? ''}

        relative
      `}
    >
      {label !== undefined && (
        <Label
          className="mb-2"
          label={label}
        />
      )}
      <DefaultButton
        className="w-full"
        onClick={handleButtonClick}
      >
        {activeOption === undefined ? (
          ''
        ) : (
          <div
            className={`
              flex
              items-center
              justify-between
            `}
          >
            <div className="mr-2">
              {activeOption.illustrationUrl !== undefined && (
                <img
                  className={`
                    mr-2
                    inline
                    align-text-top
                  `}
                  width="18"
                  height="18"
                  src={activeOption.illustrationUrl}
                  alt={activeOption.label}
                />
              )}
              {activeOption.label}
            </div>
            <div className="h-1.5">{isDropdownVisible ? <IconCaretUp /> : <IconCaretDown />}</div>
          </div>
        )}
      </DefaultButton>
      <Dropdown
        isVisible={isDropdownVisible}
        options={dropdownOptions}
        closeHandler={closeDropdown}
      />
    </div>
  );
}
