import { CuisineType } from '#/shared';
import { SelectOption } from '#/components/inputs/select-input';

export function buildCuisineTypeSelectOption(cuisineType: CuisineType): SelectOption<string> {
  return {
    value: cuisineType.id,
    label: cuisineType.name,
    illustrationUrl: cuisineType.illustrationUrl,
  };
}
