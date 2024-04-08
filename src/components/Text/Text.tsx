import {createText} from '@shopify/restyle';
import {Theme} from '@theme';
import React from 'react';
import {TextStyle} from 'react-native';

const RSTExt = createText<Theme>();
type RSTextProps = React.ComponentProps<typeof RSTExt>;

interface TextProps extends RSTextProps {
  preset?: TextVariants;
  bold?: boolean;
  semiBold?: boolean;
  medium?: boolean;
  extraBold?: boolean;
}

export function Text({
  children,
  preset = 'paragraphMedium',
  bold,
  semiBold,
  medium,
  extraBold,
  style,
  ...textProps
}: TextProps) {
  const fontFamily = getFontFamily(bold, semiBold, medium, extraBold);
  return (
    <RSTExt
      color="backgroundContrast"
      style={[$fontSizes[preset], {fontFamily}, style]}
      {...textProps}>
      {children}
    </RSTExt>
  );
}

type TextVariants =
  | 'headingLarge'
  | 'headingMedium'
  | 'headingSmall'
  | 'paragraphLarge'
  | 'paragraphMedium'
  | 'paragraphSmall'
  | 'paragraphCaption'
  | 'paragraphCaptionSmall';

export const $fontSizes: Record<TextVariants, TextStyle> = {
  headingLarge: {fontSize: 32, lineHeight: 38.4, color: 'black'},
  headingMedium: {fontSize: 22, lineHeight: 26.4},
  headingSmall: {fontSize: 18, lineHeight: 23.4},

  paragraphLarge: {fontSize: 18, lineHeight: 25.2},
  paragraphMedium: {fontSize: 16, lineHeight: 22.4},
  paragraphSmall: {fontSize: 14, lineHeight: 19.6},

  paragraphCaption: {fontSize: 12, lineHeight: 16.8},
  paragraphCaptionSmall: {fontSize: 10, lineHeight: 14},
};

export const $fontFamily = {
  black: 'Inter-Black',
  bold: 'Inter-Bold',
  extraBold: 'Inter-ExtraBold',
  light: 'Inter-Light',
  extraLight: 'Inter-ExtraLight',
  medium: 'Inter-Medium',
  semiBold: 'Inter-SemiBold',
  thin: 'Inter-Thin',
  regular: 'Inter-Regular',
};

function getFontFamily(
  bold?: boolean,
  semiBold?: boolean,
  medium?: boolean,
  extraBold?: boolean,
) {
  switch (true) {
    case bold:
      return $fontFamily.bold;
    case semiBold:
      return $fontFamily.semiBold;
    case medium:
      return $fontFamily.medium;
    case extraBold:
      return $fontFamily.extraBold;
    default:
      return $fontFamily.regular;
  }
}
