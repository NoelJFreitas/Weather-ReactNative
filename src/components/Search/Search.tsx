import {Box, BoxProps, Icon} from '@components';
import {useAppTheme} from '@hooks';
import {$shadowProps} from '@theme';
import React from 'react';
import {
  TextInput as RNTextInput,
  TextInputProps,
  TextStyle,
} from 'react-native';

interface SearchProps extends TextInputProps {
  boxPros?: BoxProps;
}

export function Search({boxPros, ...textInputProps}: SearchProps) {
  const {spacing} = useAppTheme();
  const $textInputStyle: TextStyle = {
    height: '100%',
    flex: 1,
    paddingLeft: spacing.s10,
  };

  return (
    <Box
      flexDirection="row"
      height={50}
      borderRadius="s15"
      paddingHorizontal="s15"
      alignItems="center"
      backgroundColor="background"
      style={$shadowProps}
      {...boxPros}>
      <Icon name="search" />
      <RNTextInput style={$textInputStyle} {...textInputProps} />
    </Box>
  );
}
