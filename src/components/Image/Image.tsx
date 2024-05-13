import React from 'react';
import {Image as RNImage} from 'react-native';

import {images} from '@assets';

const imagesRegistry = {
  rays: images.rays,
  sunny: images.sunny,
  cloudy: images.cloudy,
  storm: images.storm,
  rain: images.rain,
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
