import {citiesApi} from '@api';
import {CitiesApi} from './citiesTypes';

async function getCitiesByName(name: string) {
  const response = await citiesApi.get<CitiesApi[]>(
    `/city?name=${name}&limit=20&country=BR`,
  );
  return response.data;
}

export const cityApi = {
  getCitiesByName,
};
