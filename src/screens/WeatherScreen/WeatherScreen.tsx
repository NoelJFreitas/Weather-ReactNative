import {ClimateSpecifications, Screen, WeatherNow} from '@components';
import React from 'react';

export function WeatherScreen() {
  return (
    <Screen>
      <WeatherNow temperature={28} city="Vitoria" weather="storm" />
      <ClimateSpecifications
        indices={{wind: '10', humidity: '98', rain: '85'}}
        marginVertical="s15"
      />
    </Screen>
  );
}
