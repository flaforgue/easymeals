export interface Recipe {
  id: string;
  name: string;
  nbPortions: number;
  illustrationUrl: string | null;
  preparationTimeInMinutes: number;
  totalTimeInMinutes: number;
  isVegetarian: boolean;
  cuisineTypeId: string;
  houseId: string | null;
}
