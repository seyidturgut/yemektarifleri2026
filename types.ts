
export interface Recipe {
  id: string;
  name: string;
  ingredients: string[];
  instructions: string[];
  calories: number;
  prepTime: string;
  category: 'Çorba' | 'Ana Yemek' | 'Yardımcı Yemek' | 'Tatlı';
  imageUrl: string;
}

export interface DayMenu {
  day: number;
  date: string;
  recipes: Recipe[];
}

export enum AppView {
  CALENDAR = 'CALENDAR',
  DAY_DETAIL = 'DAY_DETAIL',
  RECIPE_DETAIL = 'RECIPE_DETAIL'
}
