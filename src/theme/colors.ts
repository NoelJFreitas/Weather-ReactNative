export const palette = {
  // bluePrimary: '#185489',
  blackPrimary: '#1B1D1F',
  yellowPrimary: '#FDB926',

  blueLight: '#AAC7E1',

  redError: '#EA3838',

  grayBlack: '#212329',
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
  primary: palette.yellowPrimary,
  primaryContrast: palette.grayWhite,

  background: palette.blackPrimary,
  backgroundContrast: palette.grayWhite,

  error: palette.redError,
};

export const colors = {palette, theme};
