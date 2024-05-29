import React, {useEffect, useState, useRef} from 'react';
import {TextInput as RNTextInput, TextStyle} from 'react-native';

import {Box, BoxProps, Icon, TouchableOpacityBox} from '@components';
import {useAppTheme} from '@hooks';

interface SearchProps extends BoxProps {
  boxPros?: BoxProps;
  onSearch: (text: string) => void;
  placeholder?: string;
  onPress: () => void;
}

export function Search({
  onSearch,
  placeholder,
  onPress,
  ...boxPros
}: SearchProps) {
  const [search, setSearch] = useState('');
  const {spacing, colors} = useAppTheme();
  const inputRef = useRef<RNTextInput>(null);

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

  function focusInput() {
    inputRef.current?.focus();
  }

  return (
    <Box flexDirection="row" {...boxPros}>
      <TouchableOpacityBox
        activeOpacity={1}
        onPress={focusInput}
        flexDirection="row"
        height={50}
        flex={1}
        borderRadius="s15"
        paddingHorizontal="s15"
        alignItems="center"
        backgroundColor="grayBlack">
        <Icon name="search" color="backgroundContrast" />
        <RNTextInput
          value={search}
          placeholderTextColor={colors.backgroundContrast}
          onChangeText={setSearch}
          style={$textInputStyle}
          placeholder={placeholder}
        />
      </TouchableOpacityBox>
      <TouchableOpacityBox
        onPress={onPress}
        marginLeft="s10"
        justifyContent="center"
        alignItems="center"
        paddingHorizontal="s15"
        backgroundColor="grayBlack"
        borderRadius="s15">
        <Icon name="location" color="primary" size={15} />
      </TouchableOpacityBox>
    </Box>
  );
}
