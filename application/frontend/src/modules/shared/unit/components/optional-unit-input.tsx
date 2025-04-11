import SelectInput from '#/components/inputs/select-input';
import { useUnits } from '#/modules/shared/unit/queries';
import { buildUnitSelectOption } from '#/modules/shared/unit/utils';

interface OptionalUnitInputProps {
  value: string | null;
  onChange: (v: string | null) => void;
}

const emptyOption = {
  value: null,
  label: 'Toutes les unités',
  illustrationUrl: '/icons/units.png',
};

export default function OptionalUnitInput({ value, onChange }: OptionalUnitInputProps) {
  const units = useUnits();
  const options = [emptyOption, ...units.map(buildUnitSelectOption)];

  return (
    <div className="min-w-52">
      <SelectInput
        options={options}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
