import {Box, ForecastImage, ImagesCode, Text} from '@components';
import React from 'react';
import {HourlyTodayForecast} from '@domain';
import {useDate} from '@hooks';

export interface HourlyWeatherCard {
  weather: HourlyTodayForecast;
}

export function HourlyCard({weather}: HourlyWeatherCard) {
  const {getHour} = useDate(weather.time);
  return (
    <Box
      backgroundColor="grayBlack"
      alignItems="center"
      paddingHorizontal="s25"
      paddingVertical="s10"
      borderRadius="s15">
      <Text>{getHour()}</Text>
      <ForecastImage
        imageCode={weather.iconCode as ImagesCode}
        isDay={weather.isDay}
        size={40}
        boxProps={{paddingVertical: 's6'}}
      />
      <Text preset="paragraphMedium" bold>
        {weather.temp + '°'}
      </Text>
    </Box>
  );
}
