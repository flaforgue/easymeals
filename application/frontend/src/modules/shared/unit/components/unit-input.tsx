import SelectInput from '#/components/inputs/select-input';
import { useEffect } from 'react';
import { useUnits } from '#/modules/shared/unit/queries';
import { buildUnitSelectOption } from '#/modules/shared/unit/utils';

interface UnitInputProps {
  value: string;
  onChange: (v: string) => void;
}

export default function UnitInput({ value, onChange }: UnitInputProps) {
  const units = useUnits();
  const unitOptions = units.map(buildUnitSelectOption);
  const selectFirstUnitId = () => {
    if (units.length > 0 && value === '') {
      onChange(units[0].id);
    }
  };
  useEffect(selectFirstUnitId, [onChange, units, value]);

  if (value === '') {
    return undefined;
  }

  return (
    <SelectInput
      options={unitOptions}
      value={value}
      onChange={onChange}
      className="min-w-44"
    />
  );
}
