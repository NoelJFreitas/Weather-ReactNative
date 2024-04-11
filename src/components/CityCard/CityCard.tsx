import {Text, TouchableOpacityBox, TouchableOpacityBoxProps} from '@components';
import {$shadowProps} from '@theme';
import React from 'react';

interface CityCardProps extends TouchableOpacityBoxProps {}

export function CityCard({...touchableOpacityBoxProps}: CityCardProps) {
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
        Vitória - ES (Brasil)
      </Text>
    </TouchableOpacityBox>
  );
}
