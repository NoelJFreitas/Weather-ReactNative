import React, {useEffect, useState} from 'react';
import {TextInput as RNTextInput, TextStyle} from 'react-native';

import {Box, BoxProps, Icon} from '@components';
import {useAppTheme} from '@hooks';

interface SearchProps extends BoxProps {
  boxPros?: BoxProps;
  onSearch: (text: string) => void;
  placeholder?: string;
}

export function Search({onSearch, placeholder, ...boxPros}: SearchProps) {
  const [search, setSearch] = useState('');
  const {spacing, colors} = useAppTheme();

  const $textInputStyle: TextStyle = {
    height: '100%',
    flex: 1,
    paddingLeft: spacing.s10,
    color: colors.backgroundContrast,
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
      backgroundColor="grayBlack"
      {...boxPros}>
      <Icon name="search" color="backgroundContrast" />
      <RNTextInput
        value={search}
        placeholderTextColor={colors.backgroundContrast}
        onChangeText={setSearch}
        style={$textInputStyle}
        placeholder={placeholder}
      />
    </Box>
  );
}
