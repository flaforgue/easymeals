import { MealType } from './types';

export interface Meal {
  id: string;
  date: number;
  nbPortions: number;
  mealType: MealType;
  recipe: {
    id: string;
    name: string;
    illustrationUrl: null | string;
  };
}
