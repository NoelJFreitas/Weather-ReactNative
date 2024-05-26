import {Coordinates} from '@services';
import {forecastApi as api} from '@api';
import {ForecastApi} from './forecastTypes';

async function getForecastByCoordinates(coordinates: Coordinates) {
  const {lat, long} = coordinates;
  const response = await api.get<ForecastApi>(
    `/forecast.json?q=${lat},${long}&days=9&lang=pt`,
  );

  return response.data;
}

export const forecastApi = {
  getForecastByCoordinates,
};
