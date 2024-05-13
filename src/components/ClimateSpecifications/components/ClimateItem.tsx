import {Box, Icon, IconNames, Text} from '@components';
import React from 'react';

export type IndexType = 'wind' | 'humidity' | 'rain';

interface ClimateIndicesProps {
  type: IndexType;
  value: string;
}

const indexData: Record<
  IndexType,
  {icon: IconNames; title: string; unit: string}
> = {
  rain: {
    title: 'Chuva',
    icon: 'rain',
    unit: '%',
  },
  wind: {
    title: 'Vento',
    icon: 'wind',
    unit: 'm/s',
  },
  humidity: {
    title: 'umidade',
    icon: 'drop',
    unit: '%',
  },
};

export function ClimateItem({type, value}: ClimateIndicesProps) {
  return (
    <Box flex={1} justifyContent="center" alignItems="center">
      <Icon name={indexData[type].icon} size={20} color="primary" />
      <Text semiBold marginVertical="s5" preset="paragraphSmall">
        {`${value} ${indexData[type].unit}`}
      </Text>
      <Text preset="paragraphCaptionSmall">{indexData[type].title}</Text>
    </Box>
  );
}
