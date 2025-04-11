import { getRoundedQuantity, QuantifiedIngredient, UnitCode } from '#/shared';

export function getReadableQuantityLabel(quantifiedIngredient: QuantifiedIngredient): string {
  return `${getRoundedQuantity(quantifiedIngredient.quantity, quantifiedIngredient.unitCode)}${quantifiedIngredient.unitAbbreviation}`;
}

export function getIncrementValue(unitCode: UnitCode): number {
  const incrementValues: Record<UnitCode, number> = {
    milliliter: 50,
    gram: 50,
    number: 0.25,
    teaspoon: 0.25,
    tablespoon: 0.25,
  };

  return incrementValues[unitCode];
}
