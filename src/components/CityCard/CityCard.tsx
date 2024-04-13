import {Text, TouchableOpacityBox, TouchableOpacityBoxProps} from '@components';
import {City} from '@domain';
import {$shadowProps} from '@theme';
import React from 'react';

interface CityCardProps extends TouchableOpacityBoxProps {
  city: City;
}

export function CityCard({city, ...touchableOpacityBoxProps}: CityCardProps) {
  return (
    <TouchableOpacityBox
      height={70}
      backgroundColor="background"
      style={$shadowProps}
      borderRadius="s15"
      paddingHorizontal="s15"
      justifyContent="center"
      {...touchableOpacityBoxProps}>
      <Text preset="paragraphCaption" semiBold>
        {city.name} - {city.country}
      </Text>
    </TouchableOpacityBox>
  );
}
