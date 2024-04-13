import {Box, BoxProps, Icon} from '@components';
import {useAppTheme} from '@hooks';
import {$shadowProps} from '@theme';
import React, {useEffect, useState} from 'react';
import {TextInput as RNTextInput, TextStyle} from 'react-native';

interface SearchProps extends BoxProps {
  boxPros?: BoxProps;
  onSearch: (text: string) => void;
  placeholder?: string;
}

export function Search({onSearch, placeholder, ...boxPros}: SearchProps) {
  const [search, setSearch] = useState('');

  const {spacing} = useAppTheme();
  const $textInputStyle: TextStyle = {
    height: '100%',
    flex: 1,
    paddingLeft: spacing.s10,
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (search !== '') {
        onSearch(search);
      }
    }, 500);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

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
      <RNTextInput
        value={search}
        onChangeText={setSearch}
        style={$textInputStyle}
        placeholder={placeholder}
      />
    </Box>
  );
}
