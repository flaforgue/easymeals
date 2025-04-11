export function getItemById<T extends { id: string }>(items: T[], id: string | null): T | undefined {
  return items.find((i) => i.id === id);
}

export function getUniqueItems<T>(items: T[]): T[] {
  return [...new Set(items)];
}

export function getRandomItem<T>(items: T[]): T {
  return items[Math.floor(Math.random() * items.length)];
}
