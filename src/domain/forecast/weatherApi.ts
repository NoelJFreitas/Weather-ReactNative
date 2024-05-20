import {weatherApi as weatherApiBase} from '@api';
import {ForecastApi} from './weatherTypes';

async function getWeatherByLatLog(lat: string, log: string) {
  const response = await weatherApiBase.get<ForecastApi>(
    `/forecast.json?q=${lat},${log}`,
  );
  return response.data;
}

export const weatherApi = {
  getWeatherByLatLog,
};
