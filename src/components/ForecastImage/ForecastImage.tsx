import React from 'react';
import {Image as RNImage, ImageProps as RNImageProps} from 'react-native';
import {Box, BoxProps} from '@components';
import {images} from '@assets';

export type ImagesCode = keyof (typeof images)['day'];

interface ImageProps extends RNImageProps {
  size?: number;
  imageCode: ImagesCode;
  isDay: boolean;
  boxProps?: BoxProps;
}

export function ForecastImage({
  imageCode,
  size,
  isDay,
  boxProps,
  ...imageProps
}: ImageProps) {
  return (
    <Box {...boxProps}>
      <RNImage
        {...imageProps}
        source={isDay ? images.day[imageCode] : images.night[imageCode]}
        style={{height: size, width: size}}
        resizeMode="contain"
      />
    </Box>
  );
}
