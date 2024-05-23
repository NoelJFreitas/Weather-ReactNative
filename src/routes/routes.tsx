import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppTabNavigator} from './AppTabNavigator';
import {AuthStackNavigator} from './AuthStackNavigator';
import {useAuthentication} from '@services';

export function Router() {
  const isLogged = useAuthentication();

  return (
    <NavigationContainer>
      {isLogged ? <AppTabNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
}
