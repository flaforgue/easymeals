export function getRowSpan(nbItems: number): string {
  if (nbItems > 10) {
    return 'row-span-4';
  }

  if (nbItems > 6) {
    return 'row-span-3';
  }

  if (nbItems > 3) {
    return 'row-span-2';
  }

  return 'row-span-1';
}
