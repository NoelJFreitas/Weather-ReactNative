import React from 'react';

import {Box, BoxProps, Text} from '@components';
import {FlatList, ListRenderItemInfo, ViewStyle} from 'react-native';
import {HourlyCard} from './components/HourlyCard';
import {HourlyTodayForecast} from '@domain';

interface HourlyWeatherProps extends BoxProps {
  hourlyWeather: HourlyTodayForecast[];
}

export function HourlyWeather({
  hourlyWeather,
  ...boxProps
}: HourlyWeatherProps) {
  function renderItem({item}: ListRenderItemInfo<HourlyTodayForecast>) {
    return <HourlyCard weather={item} />;
  }

  return (
    <Box {...boxProps}>
      <Text mb="s20" preset="paragraphSmall" semiBold>
        Previsão por hora
      </Text>
      <FlatList
        keyExtractor={({time}) => time}
        contentContainerStyle={$flatList}
        data={hourlyWeather}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
      />
    </Box>
  );
}

const $flatList: ViewStyle = {
  gap: 15,
  height: 'auto',
};
