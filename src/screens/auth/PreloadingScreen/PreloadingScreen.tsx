import React from 'react';
import {ActivityIndicator, Screen, Text} from '@components';

export function PreloadingScreen() {
  return (
    <Screen justifyContent="center" alignItems="center">
      <Text preset="headingLarge" mb="s30">
        Weather{' '}
        <Text preset="headingLarge" color="primary">
          Forecast
        </Text>
      </Text>
      <ActivityIndicator />
    </Screen>
  );
}
