import axios from 'axios';

const CITIES_BASE_URL = 'https://api.api-ninjas.com/v1';
const WEATHER_BASE_URL = 'https://api.weatherapi.com/v1';

export const citiesApi = axios.create({
  baseURL: CITIES_BASE_URL,
  headers: {
    'X-Api-Key': 'QAL99ZWi60pqxzhhRKHEag==L8KfugeQFc9HDTFr',
  },
});

export const weatherApi = axios.create({
  baseURL: WEATHER_BASE_URL,
  params: {
    key: 'd3e5bb9599d64b4c8b9151615241705',
  },
});
