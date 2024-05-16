import React from 'react';
import {Box, Image, Text} from '@components';

interface ForecastNextDayCardProps {
  day: string;
}

export function ForecastNextDayCard({day}: ForecastNextDayCardProps) {
  return (
    <Box flexDirection="row" mb="s15">
      <Box flex={1.5}>
        <Text preset="paragraphSmall">{day}</Text>
      </Box>
      <Box flexDirection="row" flex={2} justifyContent="space-between">
        <Text color="gray3">18°</Text>
        <Text>24°</Text>
        <Image name="cloudy" size={20} />
      </Box>
    </Box>
  );
}
