import React from 'react';

import {Box, BoxProps} from '@components';
import {FlatList, ListRenderItemInfo, ViewStyle} from 'react-native';
import {TabMenu} from './components/TabMenu';
import {HourlyWeatherType} from '@types';
import {HourlyCard} from './components/HourlyCard';

const teste: HourlyWeatherType[] = [
  {
    hour: '12 am',
    temperature: '12',
    climate: 'rain',
  },
  {
    hour: '13 am',
    temperature: '12',
    climate: 'storm',
  },
  {
    hour: '14 am',
    temperature: '12',
    climate: 'storm',
  },
  {
    hour: '15 am',
    temperature: '12',
    climate: 'storm',
  },
];

const tabMenu = [
  {
    title: 'Hoje',
    onPress: () => {},
  },
  {
    title: 'Amanhã',
    onPress: () => {},
  },
];

interface HourlyWeatherProps extends BoxProps {}

export function HourlyWeather({...boxProps}: HourlyWeatherProps) {
  function renderItem({item}: ListRenderItemInfo<HourlyWeatherType>) {
    return <HourlyCard climate={item} />;
  }

  return (
    <Box {...boxProps}>
      <TabMenu items={tabMenu} />
      <FlatList
        keyExtractor={({hour}) => hour}
        contentContainerStyle={$flatList}
        data={teste}
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
