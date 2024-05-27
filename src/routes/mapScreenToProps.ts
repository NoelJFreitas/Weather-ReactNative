import {IconProps} from '@components';
import {AppTabParamList} from './AppTabNavigator';

export const mapScreenToProps: Record<
  keyof AppTabParamList,
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
    label: 'Previsão',
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
