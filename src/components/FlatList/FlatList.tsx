import React from 'react';
import {
  Dimensions,
  FlatList as RNFlatList,
  FlatListProps as RNFlatListProps,
  ViewStyle,
} from 'react-native';

import {ActivityIndicator, Box, BoxProps, Text} from '@components';

interface FlatListProps<ItemI> extends RNFlatListProps<ItemI> {
  noPaddingHorizontal?: boolean;
  isLoading?: boolean;
  loadingMessage?: string;
  boxProps?: BoxProps;
  isError?: boolean;
  errorMessage?: string;
}

const WIDTH = Dimensions.get('screen').width;

export function FlatList<ItemI>({
  noPaddingHorizontal,
  isLoading,
  loadingMessage,
  contentContainerStyle,
  isError,
  errorMessage,
  boxProps,
  ...flatListProps
}: FlatListProps<ItemI>) {
  const $contentStyle = noPaddingHorizontal ? $noPadding : $withPadding;

  if (isLoading !== undefined && isLoading) {
    return (
      <Box flex={1} justifyContent="center" alignItems="center">
        <Text mb="s20">{loadingMessage}</Text>
        <ActivityIndicator />
      </Box>
    );
  }

  if (isError) {
    return (
      <Box flex={1} justifyContent="center" alignItems="center">
        <Text textAlign="center" style={{maxWidth: WIDTH * 0.8}}>
          {errorMessage}
        </Text>
      </Box>
    );
  }

  return (
    <Box {...boxProps} flex={1}>
      <RNFlatList
        contentContainerStyle={[$contentStyle, contentContainerStyle]}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        {...flatListProps}
      />
    </Box>
  );
}

const $noPadding: ViewStyle = {
  paddingHorizontal: 25,
  paddingVertical: 15,
  rowGap: 15,
};

const $withPadding: ViewStyle = {
  rowGap: 15,
};
