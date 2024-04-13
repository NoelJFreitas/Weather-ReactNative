import React from 'react';
import {CityCard, FlatList, Screen, Search, Text} from '@components';
import {City, useCities} from '@domain';
import {ListRenderItemInfo} from 'react-native';

export function CitiesScreen() {
  const {cities, isLoading, isError, getCities} = useCities({});

  function renderItem(city: ListRenderItemInfo<City>) {
    return <CityCard city={city.item} />;
  }

  return (
    <Screen title="Escolha sua cidade" noPaddingHorizontal>
      <Search
        placeholder="Qual a sua cidade?"
        marginHorizontal="s25"
        onSearch={t => getCities({cityName: t})}
      />
      <Text marginVertical="s15" isColored marginHorizontal="s25">
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
