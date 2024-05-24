import React from 'react';
import {
  ActivityIndicator,
  Box,
  ClimateSpecifications,
  ForecastNextDays,
  HourlyWeather,
  Screen,
  WeatherNow,
} from '@components';
import {useForecast} from '@domain';
import {useCoordinates} from '@services';

export function WeatherScreen() {
  const {coordinates} = useCoordinates();
  const {isLoading, forecast} = useForecast(coordinates);

  if (isLoading || forecast === undefined) {
    return (
      <Box
        flex={1}
        backgroundColor="background"
        justifyContent="center"
        alignItems="center">
        <ActivityIndicator />
      </Box>
    );
  }

  console.log(JSON.stringify(forecast));

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
