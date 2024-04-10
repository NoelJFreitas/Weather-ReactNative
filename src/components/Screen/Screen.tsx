import {Box, BoxProps} from '@components';
import {useAppSafeArea} from '@hooks';
import React from 'react';
import {KeyboardAvoidingView, Platform, ViewStyle} from 'react-native';

interface ScreenProps extends BoxProps {
  children: React.ReactNode;
  noPaddingHorizontal?: boolean;
}

export function Screen({
  children,
  noPaddingHorizontal,
  ...boxProps
}: ScreenProps) {
  const {top, bottom} = useAppSafeArea();
  return (
    <KeyboardAvoidingView
      style={$wrapperFlex}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Box
        paddingHorizontal={noPaddingHorizontal ? undefined : 's25'}
        backgroundColor="background"
        style={[$wrapperFlex, {paddingTop: top, paddingBottom: bottom}]}
        {...boxProps}>
        {children}
      </Box>
    </KeyboardAvoidingView>
  );
}

const $wrapperFlex: ViewStyle = {
  flex: 1,
};
