import {Box, ForecastImage, ImagesCode, Text} from '@components';
import {CurrentForecast} from '@domain';
import {useDate} from '@hooks';
import React from 'react';

interface WeatherNowProps {
  weather: CurrentForecast['current'];
}

export function WeatherNow({weather}: WeatherNowProps) {
  const {formatToISOString} = useDate(weather.date);
  return (
    <Box>
      <Text preset="headingSmall" bold>
        {weather.city}
      </Text>
      <Text semiBold color="gray4" preset="paragraphCaption">
        {formatToISOString()}
      </Text>
      <Box
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center">
        <Box>
          <Text bold preset="headingExtraLarge">
            {`${weather.temp}°`}
          </Text>
          <Text semiBold color="gray4" preset="paragraphCaption">
            {weather.condition}
          </Text>
        </Box>
        <ForecastImage
          imageCode={weather.iconCode as ImagesCode}
          isDay={weather.isDay}
          size={110}
        />
      </Box>
    </Box>
  );
}
