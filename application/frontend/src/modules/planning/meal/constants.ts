import { MealType } from '#/shared';

export const mealTypes: MealType[] = ['lunch', 'dinner'];

export const DAY_LABELS = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];

export const MONTH_LABELS = [
  'Janvier',
  'Février',
  'Mars',
  'Avril',
  'Mai',
  'Juin',
  'Juillet',
  'Août',
  'Septembre',
  'Octobre',
  'Novembre',
  'Décembre',
];

export const MEAL_LABELS: Record<MealType, string> = {
  ['lunch']: 'Midi',
  ['dinner']: 'Soir',
};
