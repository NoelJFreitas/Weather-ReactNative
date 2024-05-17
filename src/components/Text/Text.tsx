import {createText} from '@shopify/restyle';
import {Theme} from '@theme';
import React from 'react';
import {TextStyle} from 'react-native';

const RSTExt = createText<Theme>();
type RSTextProps = React.ComponentProps<typeof RSTExt>;

export interface TextProps extends RSTextProps {
  preset?: TextVariants;
  bold?: boolean;
  semiBold?: boolean;
  medium?: boolean;
  extraBold?: boolean;
  thin?: boolean;
}

export function Text({
  preset = 'paragraphMedium',
  color,
  children,
  bold,
  semiBold,
  medium,

  style,
  ...textProps
}: TextProps) {
  const fontFamily = getFontFamily(preset, bold, semiBold, medium);
  const textColor: TextProps['color'] = color ? color : 'backgroundContrast';

  return (
    <RSTExt
      style={[$fontSizes[preset], {fontFamily}, style]}
      color={textColor}
      {...textProps}>
      {children}
    </RSTExt>
  );
}

type TextVariants =
  | 'headingExtraLarge'
  | 'headingLarge'
  | 'headingMedium'
  | 'headingSmall'
  | 'paragraphLarge'
  | 'paragraphMedium'
  | 'paragraphSmall'
  | 'paragraphCaption'
  | 'paragraphCaptionSmall';

export const $fontSizes: Record<TextVariants, TextStyle> = {
  headingExtraLarge: {fontSize: 55},
  headingLarge: {fontSize: 32, lineHeight: 38.4},
  headingMedium: {fontSize: 22, lineHeight: 26.4},
  headingSmall: {fontSize: 18, lineHeight: 23.4},

  paragraphLarge: {fontSize: 18, lineHeight: 25.2},
  paragraphMedium: {fontSize: 16, lineHeight: 22.4},
  paragraphSmall: {fontSize: 14, lineHeight: 19.6},

  paragraphCaption: {fontSize: 12, lineHeight: 16.8},
  paragraphCaptionSmall: {fontSize: 10, lineHeight: 14},
};

export const $fontFamily = {
  bold: 'ChakraPetch-Bold',
  light: 'ChakraPetch-Light',
  medium: 'ChakraPetch-Medium',
  semiBold: 'ChakraPetch-SemiBold',
  regular: 'ChakraPetch-Regular',
};

function getFontFamily(
  preset: TextVariants,
  bold?: boolean,
  semiBold?: boolean,
  medium?: boolean,
) {
  if (preset.includes('heading')) {
    return 'RussoOne-Regular';
  }

  switch (true) {
    case bold:
      return $fontFamily.bold;
    case semiBold:
      return $fontFamily.semiBold;
    case medium:
      return $fontFamily.medium;
    default:
      return $fontFamily.regular;
  }
}
