import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {AppTabNavigator} from './AppTabNavigator';

export function Router() {
  return (
    <NavigationContainer>
      <AppTabNavigator />
    </NavigationContainer>
  );
}
