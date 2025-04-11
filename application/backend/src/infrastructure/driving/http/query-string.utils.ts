export function castToBoolean({ value }: { value: string }): boolean {
  return value === 'true';
}

export function castToNullOrString({ value }: { value: string }): string | null {
  return value === 'null' ? null : value;
}

export function castToDate({ value }: { value: string }): Date {
  return new Date(value);
}

export function castToNumber({ value }: { value: string }): number {
  return parseInt(value, 10);
}
