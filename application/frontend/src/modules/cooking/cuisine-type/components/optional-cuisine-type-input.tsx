import SelectInput from '#/components/inputs/select-input';
import { buildCuisineTypeSelectOption } from '#/modules/cooking/cuisine-type/utils';
import { useCuisineTypes } from '#/modules/cooking/cuisine-type/queries';

interface OptionalCuisineTypeInputProps {
  value: string | null;
  onChange: (v: string | null) => void;
  label?: string;
}

const emptyOption = {
  value: null,
  label: 'Toutes les cuisines',
  illustrationUrl: '/icons/cuisine.png',
};

export default function OptionalCuisineTypeInput({ value, onChange, label }: OptionalCuisineTypeInputProps) {
  const cuisineTypes = useCuisineTypes();
  const options = [emptyOption, ...cuisineTypes.map(buildCuisineTypeSelectOption)];

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
