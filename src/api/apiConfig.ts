import axios from 'axios';

const CITIES_BASE_URL = 'https://api.api-ninjas.com/v1';

export const citiesApi = axios.create({
  baseURL: CITIES_BASE_URL,
  headers: {
    'X-Api-Key': 'QAL99ZWi60pqxzhhRKHEag==L8KfugeQFc9HDTFr',
  },
});
