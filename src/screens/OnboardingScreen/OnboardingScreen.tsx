import React from 'react';
import {Box, Button, Image, Screen, Text} from '@components';

export function OnboardingScreen() {
  return (
    <Screen justifyContent="center" flex={1}>
      <Box mb="s60" alignItems="center">
        <Image name="rays" size={250} />
      </Box>

      <Text bold preset="headingLarge" color="yellowPrimary">
        Weather
      </Text>
      <Text bold preset="headingLarge" mb="s20">
        Forecast App
      </Text>

      <Text preset="paragraphSmall" color="gray6" mb="s50">
        Obtenha agora a previsão do tempo e precipitação em sua cidade, acesse e
        descubra!
      </Text>

      <Button preset="secondary" title="Próximo" />
    </Screen>
  );
}
