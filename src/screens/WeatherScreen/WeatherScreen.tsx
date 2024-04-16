import {Box, Icon, Image, Screen, Text} from '@components';
import React from 'react';

export function WeatherScreen() {
  return (
    <Screen>
      <Box>
        <Text bold>Vitoria</Text>
        <Text semiBold color="gray4" preset="paragraphCaption">
          15 de março, segunda.
        </Text>

        <Box
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center">
          <Box>
            <Text bold preset="headingExtraLarge">
              25°
            </Text>
            <Text semiBold color="gray4" preset="paragraphCaption">
              Tempestade
            </Text>
          </Box>
          <Image name="rays" size={110} />
        </Box>

        <Box
          height={100}
          backgroundColor="grayBlack"
          borderRadius="s10"
          flexDirection="row">
          <Box flex={1} justifyContent="center" alignItems="center">
            <Icon name="wind" size={20} color="gray4" />
            <Text preset="paragraphSmall">10 m/s</Text>
            <Text preset="paragraphCaptionSmall">Vento</Text>
          </Box>
          <Box flex={1} justifyContent="center" alignItems="center">
            <Icon name="drop" size={20} color="gray4" />
            <Text preset="paragraphSmall">10 m/s</Text>
            <Text preset="paragraphCaptionSmall">Umidade</Text>
          </Box>
          <Box flex={1} justifyContent="center" alignItems="center">
            <Icon name="rain" size={20} color="gray4" />
            <Text preset="paragraphSmall">10 m/s</Text>
            <Text preset="paragraphCaptionSmall">Chuva</Text>
          </Box>
        </Box>
      </Box>
    </Screen>
  );
}
