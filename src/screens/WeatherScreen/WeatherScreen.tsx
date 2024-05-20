import {
  Box,
  ClimateSpecifications,
  ForecastNextDays,
  HourlyWeather,
  Screen,
  WeatherNow,
} from '@components';
import React from 'react';

export function WeatherScreen() {
  return (
    <Screen scrollable noPaddingHorizontal>
      <Box paddingHorizontal="s25">
        <WeatherNow temperature={28} city="Vitoria" weather="storm" />
        <ClimateSpecifications
          indices={{wind: '10', humidity: '98', rain: '85'}}
          marginVertical="s15"
          mb="s30"
        />
      </Box>
      <Box paddingLeft="s25">
        <HourlyWeather mb="s40" />
      </Box>
      <Box paddingHorizontal="s25">
        <ForecastNextDays mb="s30" />
      </Box>
    </Screen>
  );
}
