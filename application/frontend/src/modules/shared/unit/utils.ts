import { Unit } from '#/shared';
import { SelectOption } from '#/components/inputs/select-input';

export function buildUnitSelectOption(unit: Unit): SelectOption<string> {
  return {
    value: unit.id,
    label: unit.name,
    illustrationUrl: unit.illustrationUrl,
  };
}
