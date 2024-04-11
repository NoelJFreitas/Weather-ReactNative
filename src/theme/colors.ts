export const palette = {
  bluePrimary: '#2F2E84',
  blackPrimary: '#303134',
  yellowPrimary: '#FDB926',

  redError: '#EA3838',

  grayBlack: '#000000',
  black60: 'rgba(0,0,0,0.6)',
  gray1: '#484848',
  gray2: '#606060',
  gray3: '#797979',
  gray4: '#919191',
  gray5: '#C2C2C2',
  gray6: '#DADADA',
  grayWhite: '#FFFFFF',
  white70: 'rgba(255,255,255,0.7)',
};

const theme = {
  ...palette,
  primary: palette.bluePrimary,
  primaryContrast: palette.grayWhite,

  background: palette.grayWhite,
  backgroundContrast: palette.grayBlack,

  error: palette.redError,
};

export const colors = {palette, theme};
