export function getItemsBy<T>(items: T[], propertyName: keyof T, propertyValue: unknown): T[] {
  return items.filter((i) => i[propertyName] === propertyValue);
}
