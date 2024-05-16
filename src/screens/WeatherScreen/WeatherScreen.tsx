import {
  ClimateSpecifications,
  ForecastNextDays,
  HourlyWeather,
  Screen,
  WeatherNow,
} from '@components';
import React from 'react';

export function WeatherScreen() {
  return (
    <Screen scrollable>
      <WeatherNow temperature={28} city="Vitoria" weather="storm" />
      <ClimateSpecifications
        indices={{wind: '10', humidity: '98', rain: '85'}}
        marginVertical="s15"
        mb="s30"
      />
      <HourlyWeather mb="s40" />
      <ForecastNextDays mb="s30" />
    </Screen>
  );
}
