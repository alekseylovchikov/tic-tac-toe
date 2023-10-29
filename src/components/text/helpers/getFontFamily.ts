import { Weight } from '../types';

export const getFontFamily = (weight?: Weight) => {
  switch (weight) {
    case '900':
      return 'Inter_900Black';
    case '400':
      return 'Inter_400Regular';
    default:
      return 'Inter_400Regular';
  }
};
