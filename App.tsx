import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ThemeProvider} from '@shopify/restyle';
import React from 'react';
import {theme} from '@theme';
import {WeatherScreen} from '@screens';

import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const queryClient = new QueryClient();

export function App() {
  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <WeatherScreen />
        </ThemeProvider>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
}
