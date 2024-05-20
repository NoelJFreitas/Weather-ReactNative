import {weatherAdapter} from './weatherAdapter';
import {weatherApi} from './weatherApi';

async function getWeatherByLatLog(lat: string, lon: string) {
  try {
    const weatherFromApi = await weatherApi.getWeatherByLatLog(lat, lon);
    const weather = weatherAdapter.toWeatherApi(weatherFromApi);
    return weather;
  } catch (error) {
    throw new Error('Não foi possível obter os dados de sua localização');
  }
}

export const weatherService = {
  getWeatherByLatLog,
};
