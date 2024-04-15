import React from 'react';
import {KeyboardAvoidingView, Platform} from 'react-native';
import {ScreenHeader, ScrollViewContainer, ViewContainer} from './components';
import {useAppTheme, useAppSafeArea} from '@hooks';
import {Box, BoxProps} from '@components';

export interface ScreenProps extends BoxProps {
  children: React.ReactNode;
  scrollable?: boolean;
  noHeader?: boolean;
  noPaddingHorizontal?: boolean;
  noPaddingBottom?: boolean;
  noPaddingTop?: boolean;
  headerComponent?: React.ReactNode;
  title?: string;
  canGoBack?: boolean;
}

export function Screen({
  children,
  scrollable = false,
  noPaddingHorizontal = false,
  noPaddingBottom = false,
  noPaddingTop = false,
  canGoBack = false,
  style,
  headerComponent,
  title,
  backgroundColor,
  ...boxProps
}: ScreenProps) {
  const {colors} = useAppTheme();
  const {top, bottom} = useAppSafeArea();
  const Container = scrollable ? ScrollViewContainer : ViewContainer;

  const canHeader = !!title || !!headerComponent || canGoBack;
  const background = backgroundColor
    ? colors[backgroundColor]
    : colors.background;

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Container backgroundColor={background}>
        <Box
          flex={1}
          paddingHorizontal={noPaddingHorizontal ? undefined : 's25'}
          style={{
            paddingTop: noPaddingTop ? undefined : top,
            paddingBottom: noPaddingBottom ? undefined : bottom,
          }}>
          {canHeader && (
            <ScreenHeader
              canGoBack={canGoBack}
              title={title}
              headerComponent={headerComponent}
              paddingHorizontal={noPaddingHorizontal ? 's25' : undefined}
            />
          )}
          <Box flex={1} style={style} {...boxProps}>
            {children}
          </Box>
        </Box>
      </Container>
    </KeyboardAvoidingView>
  );
}
