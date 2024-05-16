import {Box, Text, TouchableOpacityBox} from '@components';
import {ThemeColors} from '@theme';
import React, {useState} from 'react';
import {View, ViewStyle} from 'react-native';

export interface TabMenuItem {
  title: string;
  onPress: () => void;
}

interface TabMenuProps {
  items: TabMenuItem[];
}

export function TabMenu({items}: TabMenuProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <Box flexDirection="row" paddingBottom="s20">
      {items.map(({title, onPress}, i) => {
        const backgroundColor = selectedIndex === i ? 'white' : undefined;
        const color: ThemeColors = selectedIndex === i ? 'grayWhite' : 'gray4';

        function handleOnPress() {
          onPress();
          setSelectedIndex(i);
        }

        return (
          <TouchableOpacityBox
            key={i.toString()}
            activeOpacity={0.7}
            justifyContent="center"
            alignItems="center"
            marginRight="s20"
            onPress={handleOnPress}>
            <Text preset="paragraphCaption" semiBold color={color}>
              {title}
            </Text>
            <View style={[$selectIndicator, {backgroundColor}]} />
          </TouchableOpacityBox>
        );
      })}
    </Box>
  );
}

const $selectIndicator: ViewStyle = {
  height: 5,
  width: 5,
  borderRadius: 5,
  marginTop: 5,
};
