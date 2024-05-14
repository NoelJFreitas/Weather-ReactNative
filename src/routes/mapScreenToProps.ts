import {IconProps} from '@components';
import {AppTabBottomTabParamList} from './AppTabNavigator';

export const mapScreenToProps: Record<
  keyof AppTabBottomTabParamList,
  {
    label: string;
    icon: {
      fill: IconProps['name'];
      outline: IconProps['name'];
    };
  }
> = {
  CitiesScreen: {
    label: 'Pesquisar',
    icon: {
      fill: 'point',
      outline: 'pointOutline',
    },
  },
  WeatherScreen: {
    label: 'Meu local',
    icon: {
      fill: 'location',
      outline: 'locationOutline',
    },
  },
  AccountScreen: {
    label: 'Conta',
    icon: {
      fill: 'user',
      outline: 'userOutline',
    },
  },
};
