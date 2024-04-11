import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ThemeProvider} from '@shopify/restyle';
import React from 'react';
import {theme} from '@theme';
import {CitiesScreen} from '@screens';

export function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <CitiesScreen />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
