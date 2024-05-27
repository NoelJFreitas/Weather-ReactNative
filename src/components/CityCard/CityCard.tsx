import {Text, TouchableOpacityBox} from '@components';
import {City} from '@domain';
import {$shadowProps} from '@theme';
import React from 'react';

interface CityCardProps {
  city: City;
  onPress: (lat: number, long: number) => void;
}

export function CityCard({city, onPress}: CityCardProps) {
  return (
    <TouchableOpacityBox
      height={70}
      backgroundColor="grayBlack"
      style={$shadowProps}
      borderRadius="s15"
      paddingHorizontal="s15"
      justifyContent="center"
      onPress={() => onPress(city.lat, city.long)}>
      <Text preset="paragraphCaption" semiBold>
        {city.name} - {city.country}
      </Text>
    </TouchableOpacityBox>
  );
}
