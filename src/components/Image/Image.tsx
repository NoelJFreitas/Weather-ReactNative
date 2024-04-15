import React from 'react';
import {ImageStyle, Image as RNImage} from 'react-native';

import {Box} from '@components';
import {images} from '@assets';

const imagesRegistry = {
  cloudWithRays: images.cloudWithRays,
};

export type ImagesName = keyof typeof imagesRegistry;

interface ImageProps {
  name: ImagesName;
  size?: number;
}

export function Image({name, size}: ImageProps) {
  return (
    <RNImage
      height={size}
      width={size}
      source={imagesRegistry[name]}
      style={{height: size, width: size}}
      resizeMode="contain"
    />
  );
}
