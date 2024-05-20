export interface LocationApi {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  tz_id: string;
  localtime_epoch: number;
  localtime: string;
}

export interface CurrentWeatherApi {
  last_updated: string;
  temp_c: number;
  is_day: number;
  condition: {
    text: string;
  };
  wind_kph: number;
  wind_degree: number;
  pressure_mb: number;
  precip_mm: number;
  humidity: number;
  cloud: number;
}

export interface ForecastDayApy {
  forecastday: {
    date: string;
    day: {
      maxtemp_c: number;
      mintemp_c: number;
      avgtemp_c: number;
      daily_chance_of_rain: number;
      condition: {
        text: string;
      };
    };
    hour: {
      time: string;
      temp_c: number;
      condition: {
        text: string;
      };
    }[];
  }[];
}

export interface ForecastApi {
  location: LocationApi;
  current: CurrentWeatherApi;
  forecast: ForecastDayApy;
}

export interface Weather {
  city: string;
  region: string;
  current: {
    temp: number;
    condition: string;
    windSpeed: number;
    humidity: number;
    chanceOfRain: number;
    hourlyForecast: {
      time: string;
      temp: number;
      condition: string;
    }[];
  };
  nextDays: {
    date: string;
    maxTemp: number;
    minTemp: number;
    condition: string;
  }[];
}
