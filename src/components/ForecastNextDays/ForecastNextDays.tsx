import React from 'react';

import {Box, BoxProps, FlatList, Text} from '@components';
import {ForecastNextDayCard} from './ForecastNextDayCard/ForecastNextDayCard';
import {CurrentForecast, NextDayForecast} from '@domain';
import {ListRenderItemInfo} from 'react-native';

interface ForecastNextDaysProps extends BoxProps {
  nextDays: CurrentForecast['nextDays'];
}

export function ForecastNextDays({
  nextDays,
  ...boxProps
}: ForecastNextDaysProps) {
  function renderItem({item}: ListRenderItemInfo<NextDayForecast>) {
    return <ForecastNextDayCard forecast={item} />;
  }

  return (
    <Box {...boxProps}>
      <Text mb="s20" preset="paragraphSmall" semiBold>
        Próximos 7 Dias
      </Text>
      <FlatList
        keyExtractor={({date}) => date}
        data={nextDays}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        scrollEnabled={false}
      />
    </Box>
  );
}
