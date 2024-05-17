import {createTheme} from '@shopify/restyle';
import {colors} from './colors';
import {ViewStyle} from 'react-native';

export const theme = createTheme({
  colors: colors.theme,
  spacing: {
    s5: 5,
    s6: 6,
    s10: 10,
    s15: 15,
    s20: 20,
    s25: 25,
    s30: 30,
    s40: 40,
    s50: 50,
    s60: 60,
    s70: 70,
    s80: 80,
    s90: 90,
  },
  borderRadii: {
    s10: 10,
    s15: 15,
  },
  textVariants: {
    defaults: {},
  },
});

export const $shadowProps: ViewStyle = {
  elevation: 5,
  shadowColor: '#000',
  shadowOpacity: 0.06,
  shadowRadius: 10,
  shadowOffset: {width: 0, height: -3},
};

export type Theme = typeof theme;
export type ThemeColors = keyof Theme['colors'];
