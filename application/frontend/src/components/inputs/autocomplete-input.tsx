import { useEffect, useState } from 'react';
import Dropdown, { DropdownOption } from '#/components/dropdown/dropdown';
import TextInput from '#/components/inputs/text-input';
import DropdownOptionChild from '#/components/dropdown/dropdown-option-child';

interface AutocompleteOption {
  label: string;
  onClick: () => void;
  isActive?: boolean;
  illustrationUrl?: string;
}

interface AutocompleteInputProps {
  options: AutocompleteOption[];
  reset: () => void;
  value?: string;
  label?: string;
  placeholder?: string;
  hasCreateOption?: boolean;
  onCreateOptionClick?: (searchValue: string) => void;
}

export default function AutocompleteInput({
  options,
  reset,
  value,
  label,
  placeholder,
  hasCreateOption = false,
  onCreateOptionClick,
}: AutocompleteInputProps) {
  const [searchValue, setSearchValue] = useState('');
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const closeDropdown = () => setIsDropdownVisible(false);

  useEffect(() => {
    if (value === '') {
      setSearchValue('');

      return;
    }

    const activeOption = options.find((o) => o.isActive);
    if (activeOption !== undefined) {
      setSearchValue(activeOption.label);
    }
  }, [options, value]);

  const resetValueAndCloseDropdown = () => {
    closeDropdown();
    setSearchValue('');
    reset();
  };
  const updateSearchResults = (search: string) => {
    setSearchValue(search);
    if (search === '') {
      resetValueAndCloseDropdown();
    } else {
      setIsDropdownVisible(true);
    }
  };

  const decorateOption = (option: AutocompleteOption): DropdownOption => {
    return {
      children: (
        <DropdownOptionChild
          isActive={option.isActive ?? false}
          label={option.label}
          illustrationUrl={option.illustrationUrl}
        />
      ),
      onClick: () => {
        option.onClick();
        closeDropdown();
        setSearchValue(option.label);
      },
    };
  };
  const decoratedAdditionalOption = hasCreateOption
    ? {
        children: (
          <DropdownOptionChild
            isActive={false}
            label={`Créer "${searchValue}"`}
            illustrationUrl="/icons/add.png"
            className="text-green-500"
          />
        ),
        onClick: () => onCreateOptionClick?.(searchValue),
      }
    : undefined;

  const filteredOptions =
    searchValue === ''
      ? []
      : options.filter((o) => o.label.toLowerCase().includes(searchValue.toLowerCase())).slice(0, 5);

  const hasPerfectMatch = filteredOptions.some((item) => item.label.toLowerCase() === searchValue.toLowerCase());
  const hasResults = filteredOptions.length > 0 || decoratedAdditionalOption !== undefined;

  const dropdownOptions = filteredOptions.map(decorateOption);

  return (
    <div className="relative">
      <div>
        <TextInput
          label={label}
          value={searchValue}
          onChange={updateSearchResults}
          placeholder={placeholder}
        />
      </div>
      <Dropdown
        isVisible={isDropdownVisible && hasResults}
        options={[
          ...dropdownOptions,
          ...(hasPerfectMatch || decoratedAdditionalOption === undefined ? [] : [decoratedAdditionalOption]),
        ]}
        closeHandler={closeDropdown}
      />
    </div>
  );
}
