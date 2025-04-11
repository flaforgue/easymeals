export type UnitCode = 'number' | 'gram' | 'teaspoon' | 'tablespoon' | 'milliliter';

export interface Unit {
  id: string;
  code: UnitCode;
  name: string;
  abbreviation: string;
  illustrationUrl: string;
}
