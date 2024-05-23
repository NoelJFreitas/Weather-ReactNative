import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {OnboardingScreen, PreloadingScreen} from '@screens';

export type AuthStackParamList = {
  OnboardingScreen: undefined;
  PreloadingScreen: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();
export function AuthStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
      <Stack.Screen name="PreloadingScreen" component={PreloadingScreen} />
    </Stack.Navigator>
  );
}
