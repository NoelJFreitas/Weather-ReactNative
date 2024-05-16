import {Box, Image, Text} from '@components';
import React from 'react';
import {HourlyWeatherType} from '@types';

export interface HourlyWeatherCard {
  climate: HourlyWeatherType;
}

export function HourlyCard({climate}: HourlyWeatherCard) {
  return (
    <Box
      backgroundColor="grayBlack"
      alignItems="center"
      paddingHorizontal="s25"
      paddingVertical="s10"
      borderRadius="s15">
      <Text>{climate.hour}</Text>
      <Image name={climate.climate} size={40} paddingVertical="s6" />
      <Text preset="paragraphMedium" bold>
        {climate.temperature}
      </Text>
    </Box>
  );
}
