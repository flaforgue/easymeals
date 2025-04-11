import SelectInput from '#/components/inputs/select-input';
import { buildCuisineTypeSelectOption } from '#/modules/cooking/cuisine-type/utils';
import { useCuisineTypes } from '#/modules/cooking/cuisine-type/queries';
import { useEffect } from 'react';

interface CuisineTypeInputProps {
  value: string;
  onChange: (v: string) => void;
  label?: string;
}

export default function CuisineTypeInput({ value, onChange, label }: CuisineTypeInputProps) {
  const cuisineTypes = useCuisineTypes();
  const options = cuisineTypes.map(buildCuisineTypeSelectOption);

  const selectFirstCuisineTypeId = () => {
    if (cuisineTypes.length > 0 && value === '') {
      onChange(cuisineTypes[0].id);
    }
  };
  useEffect(selectFirstCuisineTypeId, [onChange, cuisineTypes, value]);

  if (value === '') {
    return undefined;
  }

  return (
    <div className="min-w-56">
      <SelectInput
        label={label}
        options={options}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
