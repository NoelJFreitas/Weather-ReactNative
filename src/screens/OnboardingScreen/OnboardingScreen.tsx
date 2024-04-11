import React from 'react';
import {Box, Button, Icon, Screen, Text} from '@components';

export function OnboardingScreen() {
  return (
    <Screen justifyContent="center" backgroundColor="primary" flex={1}>
      <Box mb="s60" alignItems="center">
        <Icon name="cloudySun" size={200} />
      </Box>

      <Text bold preset="headingLarge" color="yellowPrimary">
        Weather
      </Text>
      <Text bold preset="headingLarge" color="grayWhite" mb="s20">
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
