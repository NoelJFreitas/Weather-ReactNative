import React from 'react';
import {Box, BoxProps, Icon, ScreenProps, Text} from '@components';
import {Platform} from 'react-native';
// import {useNavigation} from '@react-navigation/native';

type ScreenHeaderProps = Pick<
  ScreenProps,
  'title' | 'canGoBack' | 'headerComponent'
> &
  BoxProps;

export function ScreenHeader({
  canGoBack,
  title,
  headerComponent,
  ...boxProps
}: ScreenHeaderProps) {
  const headerShow = title || canGoBack || headerComponent;
  // const navigation = useNavigation();
  // const goBack = () => navigation.goBack();

  return (
    <Box
      flexDirection="row"
      mt={Platform.OS === 'android' ? 's10' : undefined}
      mb={headerShow ? 's25' : undefined}
      {...boxProps}>
      {canGoBack && <Icon name="return" />}
      {title && (
        <Box flex={1} alignItems="center" mr={canGoBack ? 's25' : undefined}>
          <Text bold color="primary">
            {title}
          </Text>
        </Box>
      )}
      {headerComponent}
    </Box>
  );
}
