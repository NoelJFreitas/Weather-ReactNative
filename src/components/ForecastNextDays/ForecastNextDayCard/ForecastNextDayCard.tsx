import React from 'react';
import {Box, ForecastImage, ImagesCode, Text} from '@components';
import {NextDayForecast} from '@domain';
import {useDate} from '@hooks';

export interface ForecastNextDayProps {
  forecast: NextDayForecast;
}

export function ForecastNextDayCard({forecast}: ForecastNextDayProps) {
  const {getDayWeek} = useDate(forecast.date);
  return (
    <Box flexDirection="row" mb="s15">
      <Box flex={1.5}>
        <Text preset="paragraphSmall">{getDayWeek()}</Text>
      </Box>
      <Box flexDirection="row" flex={2} justifyContent="space-between">
        <Text color="gray3">{forecast.minTemp}°</Text>
        <Text>{forecast.maxTemp}°</Text>
        <ForecastImage
          isDay={true}
          imageCode={forecast.iconCode as ImagesCode}
          size={20}
        />
      </Box>
    </Box>
  );
}
