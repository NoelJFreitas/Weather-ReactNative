import React from 'react';
import {Box, Button, Screen, Text} from '@components';
import {useAuthenticationService} from '@services';
import {Image} from 'react-native';

export function OnboardingScreen() {
  const setUserIsLogged = useAuthenticationService();
  function navigateToAppScreens() {
    setUserIsLogged(true);
  }

  const image = require('../../../assets/images/rays.png');

  return (
    <Screen justifyContent="center" flex={1}>
      <Box mb="s60" alignItems="center">
        <Image source={image} style={{height: 250, width: 250}} />
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

      <Button
        preset="secondary"
        title="Acessar"
        onPress={navigateToAppScreens}
      />
    </Screen>
  );
}
