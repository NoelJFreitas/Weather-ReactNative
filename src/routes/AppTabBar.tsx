import {
  Box,
  BoxProps,
  Icon,
  Text,
  TextProps,
  TouchableOpacityBox,
  TouchableOpacityBoxProps,
} from '@components';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import React from 'react';
import {mapScreenToProps} from './mapScreenToProps';
import {AppTabBottomTabParamList} from './AppTabNavigator';
import {useAppSafeArea} from '@hooks';
import {$shadowProps} from '@theme';

export function AppTabBar({state, descriptors, navigation}: BottomTabBarProps) {
  const {bottom} = useAppSafeArea();

  return (
    <Box {...$boxWrapper} style={[$shadowProps, {paddingBottom: bottom}]}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];

        const isFocused = state.index === index;
        const tabItem =
          mapScreenToProps[route.name as keyof AppTabBottomTabParamList];

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacityBox
            {...$itemWrapper}
            key={route.name}
            onPress={onPress}
            onLongPress={onLongPress}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            style={{flex: 1}}>
            <Icon
              size={25}
              name={isFocused ? tabItem.icon.fill : tabItem.icon.outline}
              color={isFocused ? 'primary' : 'gray3'}
            />
            <Text {...$textStyle} color={isFocused ? 'grayWhite' : 'gray3'}>
              {tabItem.label}
            </Text>
          </TouchableOpacityBox>
        );
      })}
    </Box>
  );
}

const $boxWrapper: BoxProps = {
  backgroundColor: 'grayBlack',
  flexDirection: 'row',
  paddingTop: 's20',
};

const $itemWrapper: TouchableOpacityBoxProps = {
  activeOpacity: 1,
  alignItems: 'center',
  justifyContent: 'center',
  accessibilityRole: 'button',
};

const $textStyle: TextProps = {
  // color: 'gray3',
  preset: 'paragraphCaption',
  textAlign: 'center',
  paddingTop: 's5',
};
