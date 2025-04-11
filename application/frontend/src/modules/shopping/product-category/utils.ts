import { ProductCategory } from '#/shared';
import { SelectOption } from '#/components/inputs/select-input';

export function buildProductCategorySelectOption(productCategory: ProductCategory): SelectOption<string> {
  return {
    value: productCategory.id,
    label: productCategory.name,
    illustrationUrl: productCategory.illustrationUrl,
  };
}
