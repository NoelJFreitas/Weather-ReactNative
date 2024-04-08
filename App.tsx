import {Text} from '@components';
import {ThemeProvider} from '@shopify/restyle';
import React from 'react';
import {View} from 'react-native';
import {theme} from '@theme';

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text semiBold preset="headingLarge">
          teste
        </Text>
      </View>
    </ThemeProvider>
  );
}
