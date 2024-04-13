import {citiesAdapter} from './citiesAdapter';
import {cityApi} from './citiesApi';
import {City} from './citiesTypes';

async function getCityByName(name: string): Promise<City[]> {
  const citiesFromApi = await cityApi.getCitiesByName(name);
  const cities = citiesAdapter.toCitiesApi(citiesFromApi);
  return cities;
}

export const citiesService = {
  getCityByName,
};
