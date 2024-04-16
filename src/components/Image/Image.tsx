import React from 'react';
import {Image as RNImage} from 'react-native';

import {images} from '@assets';

const imagesRegistry = {
  rays: images.rays,
  sun: images.sun,
  cloudy: images.cloudy,
  lightningRain: images.lightningRain,
};

export type ImagesName = keyof typeof imagesRegistry;

interface ImageProps {
  name: ImagesName;
  size?: number;
}

export function Image({name, size}: ImageProps) {
  return (
    <RNImage
      source={imagesRegistry[name]}
      style={{height: size, width: size}}
      resizeMode="contain"
    />
  );
}
