import React from 'react';
import {Image as RNImage} from 'react-native';

import {images} from '@assets';
import {Box, BoxProps} from '@components';
import {ClimateTypes} from 'src/types/climate';

const imagesRegistry: Record<ClimateTypes, any> = {
  rays: images.rays,
  sunny: images.sunny,
  cloudy: images.cloudy,
  storm: images.storm,
  rain: images.rain,
};

export type ImagesName = keyof typeof imagesRegistry;

interface ImageProps extends BoxProps {
  name: ImagesName;
  size?: number;
}

export function Image({name, size, ...boxProps}: ImageProps) {
  return (
    <Box {...boxProps}>
      <RNImage
        source={imagesRegistry[name]}
        style={{height: size, width: size}}
        resizeMode="contain"
      />
    </Box>
  );
}
