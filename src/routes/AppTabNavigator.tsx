import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {CitiesScreen, WeatherScreen, AccountScreen} from '@screens';
import React from 'react';
import {AppTabBar} from './AppTabBar';
import {useCoordinates} from '@services';
import {ActivityIndicator, Box} from '@components';
export type AppTabParamList = {
  CitiesScreen: undefined;
  WeatherScreen: undefined;
  AccountScreen: undefined;
};

const Tab = createBottomTabNavigator<AppTabParamList>();

export function AppTabNavigator() {
  const {coordinates, isLoading} = useCoordinates();
  function renderTab(props: BottomTabBarProps) {
    return <AppTabBar {...props} />;
  }

  if (isLoading) {
    return (
      <Box
        flex={1}
        backgroundColor="background"
        justifyContent="center"
        alignItems="center">
        <ActivityIndicator />
      </Box>
    );
  }

  return (
    <Tab.Navigator
      initialRouteName={coordinates !== null ? 'WeatherScreen' : 'CitiesScreen'}
      tabBar={renderTab}
      screenOptions={{headerShown: false, tabBarHideOnKeyboard: true}}>
      <Tab.Screen name="CitiesScreen" component={CitiesScreen} />
      <Tab.Screen name="WeatherScreen" component={WeatherScreen} />
      <Tab.Screen name="AccountScreen" component={AccountScreen} />
    </Tab.Navigator>
  );
}
