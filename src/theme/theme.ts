import {createTheme} from '@shopify/restyle';
import {colors} from './colors';

export const theme = createTheme({
  colors: colors.theme,
  spacing: {},
  borderRadii: {},
  textVariants: {
    defaults: {},
  },
});

export type Theme = typeof theme;
