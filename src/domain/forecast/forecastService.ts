import {Coordinates} from '@services';
import {forecastApi} from './forecastApi';
import {forecastAdapter} from './forecastAdapter';

async function getForecastByCoordinates(coordinates: Coordinates) {
  const response = await forecastApi.getForecastByCoordinates(coordinates);
  const forecast = forecastAdapter.toForecastApi(response);
  return forecast;
}

export const forecastService = {
  getForecastByCoordinates,
};
