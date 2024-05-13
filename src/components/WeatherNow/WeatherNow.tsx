import {Box, Image, ImagesName, Text} from '@components';
import React from 'react';

type WeatherTypes = 'cloudy' | 'rain' | 'storm' | 'sunny';

interface WeatherNowProps {
  weather: WeatherTypes;
  city: string;
  temperature: number;
}

const weatherTypes: Record<WeatherTypes, {image: ImagesName; name: string}> = {
  rain: {
    image: 'rain',
    name: 'Chuvoso',
  },
  cloudy: {
    image: 'cloudy',
    name: 'Nublado',
  },
  sunny: {
    image: 'sunny',
    name: 'Ensolarado',
  },
  storm: {
    image: 'storm',
    name: 'Tempestade',
  },
};

export function WeatherNow({city, temperature, weather}: WeatherNowProps) {
  return (
    <Box>
      <Text bold>{city}</Text>
      <Text semiBold color="gray4" preset="paragraphCaption">
        15 de março, segunda.
      </Text>
      <Box
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center">
        <Box>
          <Text bold preset="headingExtraLarge">
            {`${temperature}°`}
          </Text>
          <Text semiBold color="gray4" preset="paragraphCaption">
            {weatherTypes[weather].name}
          </Text>
        </Box>
        <Image name={weatherTypes[weather].image} size={110} />
      </Box>
    </Box>
  );
}
