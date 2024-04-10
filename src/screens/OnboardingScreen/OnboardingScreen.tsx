import React from 'react';
import {Box, Button, Icon, Screen, Text} from '@components';

export function OnboardingScreen() {
  return (
    <Screen justifyContent="center" flex={1}>
      <Box mb="s40" alignItems="center">
        <Icon name="cloudySun" size={200} />
      </Box>
      <Text bold preset="headingMedium" textAlign="center" mb="s20">
        Descubra o clima em sua cidade
      </Text>
      <Text textAlign="center" preset="paragraphSmall" mb="s90">
        Obtenha agora a previsão do tempo e precipitação em sua cidade, acesse e
        descubra!
      </Text>
      <Button title="Acessar" />
    </Screen>
  );
}
