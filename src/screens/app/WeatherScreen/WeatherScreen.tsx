import React from 'react';
import {
  ActivityIndicator,
  Box,
  WeatherSpecifications,
  ForecastNextDays,
  HourlyWeather,
  Screen,
  WeatherNow,
  Text,
} from '@components';
import {useForecast} from '@domain';
import {useCoordinates} from '@services';

export function WeatherScreen() {
  const {coordinates} = useCoordinates();
  const {isLoading, forecast} = useForecast(coordinates);

  if (isLoading || !forecast) {
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

  if (!coordinates) {
    return (
      <Box
        flex={1}
        backgroundColor="background"
        justifyContent="center"
        alignItems="center">
        <Text paddingHorizontal="s15" textAlign="center">
          Escolha uma cidade para ter acesso ao dados
        </Text>
      </Box>
    );
  }

  return (
    <Screen scrollable noPaddingHorizontal>
      <Box paddingHorizontal="s25">
        <WeatherNow weather={forecast.current} />
        <WeatherSpecifications
          weather={forecast.current}
          marginVertical="s15"
          mb="s30"
        />
      </Box>
      <Box paddingLeft="s25">
        <HourlyWeather hourlyWeather={forecast.hourlyToday} mb="s40" />
      </Box>
      <Box paddingHorizontal="s25">
        <ForecastNextDays nextDays={forecast.nextDays} mb="s30" />
      </Box>
    </Screen>
  );
}
