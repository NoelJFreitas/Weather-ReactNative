import React from 'react';
import {CityCard, FlatList, Screen, Search, Text} from '@components';
import {City, useCities} from '@domain';
import {ListRenderItemInfo} from 'react-native';
import {useCoordinates} from '@services';
import {AppScreenProps} from '@routes';

export function CitiesScreen({navigation}: AppScreenProps<'CitiesScreen'>) {
  const {cities, isLoading, isError, getCities} = useCities({});
  const {changeCurrentCoordinates, getCoordinateOfCurrentPosition} =
    useCoordinates();

  function handleSetCoordinates(lat: number, long: number) {
    changeCurrentCoordinates({lat, long});
    navigation.navigate('WeatherScreen');
  }

  function renderItem({item}: ListRenderItemInfo<City>) {
    return <CityCard city={item} onPress={handleSetCoordinates} />;
  }

  function getCurrentCoordinates() {
    getCoordinateOfCurrentPosition();
    navigation.navigate('WeatherScreen');
  }

  return (
    <Screen title="Escolha sua cidade" noPaddingHorizontal>
      <Search
        placeholder="Qual cidade está procurando?"
        marginHorizontal="s25"
        onSearch={t => getCities({cityName: t})}
        onPress={getCurrentCoordinates}
      />

      <Text marginVertical="s15" marginHorizontal="s25">
        Cities
      </Text>
      <FlatList
        noPaddingHorizontal
        data={cities}
        isLoading={isLoading}
        isError={isError}
        errorMessage="Desculpe, nao foi possível obter os dados da api"
        renderItem={renderItem}
      />
    </Screen>
  );
}
