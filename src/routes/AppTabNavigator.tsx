import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {CitiesScreen, WeatherScreen} from '@screens';
import React from 'react';
import {AppTabBar} from './AppTabBar';

export type AppTabBottomTabParamList = {
  CitiesScreen: undefined;
  WeatherScreen: undefined;
  AccountScreen: undefined;
};

const Tab = createBottomTabNavigator<AppTabBottomTabParamList>();

export function AppTabNavigator() {
  function renderTab(props: BottomTabBarProps) {
    return <AppTabBar {...props} />;
  }

  return (
    <Tab.Navigator
      initialRouteName="WeatherScreen"
      tabBar={renderTab}
      screenOptions={{headerShown: false}}>
      <Tab.Screen name="CitiesScreen" component={CitiesScreen} />
      <Tab.Screen name="WeatherScreen" component={WeatherScreen} />
      <Tab.Screen name="AccountScreen" component={WeatherScreen} />
    </Tab.Navigator>
  );
}
