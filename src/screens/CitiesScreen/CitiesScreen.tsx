import React from 'react';
import {CityCard, Screen, Search, Text} from '@components';

export function CitiesScreen() {
  return (
    <Screen title="Escolha sua cidade" canGoBack>
      <Search placeholder="Qual a sua cidade?" />
      <Text marginVertical="s15" isColored>
        Cities
      </Text>
      <CityCard />
    </Screen>
  );
}
