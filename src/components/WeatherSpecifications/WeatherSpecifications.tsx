import {Box, BoxProps} from '@components';
import React from 'react';
import {ClimateItem} from './components/ClimateItem';
import {CurrentForecast} from '@domain';

interface WeatherSpecificationsProps extends BoxProps {
  weather: CurrentForecast['current'];
}

export function WeatherSpecifications({
  weather,
  ...boxProps
}: WeatherSpecificationsProps) {
  return (
    <Box
      height={100}
      backgroundColor="grayBlack"
      borderRadius="s10"
      flexDirection="row"
      {...boxProps}>
      <ClimateItem type="wind" value={weather.windSpeed} />
      <ClimateItem type="humidity" value={weather.humidity} />
      <ClimateItem type="rain" value={weather.chanceOfRain} />
    </Box>
  );
}
