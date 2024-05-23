import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthStackParamList} from './AuthStackNavigator';
import {AppTabParamList} from './AppTabNavigator';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AuthStackParamList {}
  }
}

export type AppScreenProps<RouteName extends keyof AppTabParamList> =
  NativeStackScreenProps<AppTabParamList, RouteName>;

export type AuthScreenProps<RouteName extends keyof AuthStackParamList> =
  NativeStackScreenProps<AuthStackParamList, RouteName>;
