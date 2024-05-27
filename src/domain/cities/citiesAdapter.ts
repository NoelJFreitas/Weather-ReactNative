import {CitiesApi, City} from './citiesTypes';

function toCitiesApi(citiesApi: CitiesApi[]): City[] {
  const cities: City[] = [];

  citiesApi.map(item => {
    cities.push({
      name: item.name,
      country: item.country,
      lat: item.latitude,
      long: item.longitude,
    });
  });

  return cities;
}

export const citiesAdapter = {
  toCitiesApi,
};
