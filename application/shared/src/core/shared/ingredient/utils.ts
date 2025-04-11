import { UnitCode } from '../unit';

export function scaleQuantity(quantity: number, initialNbPortions: number, targetNbPortions: number): number {
  const scaleFactor = targetNbPortions / initialNbPortions;

  return Math.round(quantity * scaleFactor * 1000) / 1000;
}

export function getRoundedQuantity(quantity: number, unitCode: UnitCode): number {
  const incrementValues: Record<UnitCode, number> = {
    milliliter: 5,
    gram: 5,
    number: 0.25,
    teaspoon: 0.25,
    tablespoon: 0.25,
  };
  const complementTo = incrementValues[unitCode];

  if (quantity % complementTo === 0) {
    return quantity;
  }

  return quantity + complementTo - (quantity % complementTo);
}
