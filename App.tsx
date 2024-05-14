import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ThemeProvider} from '@shopify/restyle';
import React from 'react';
import {theme} from '@theme';

import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {Router} from '@routes';

const queryClient = new QueryClient();

export function App() {
  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <Router />
        </ThemeProvider>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
}
