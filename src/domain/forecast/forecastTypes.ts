export interface CurrentForecast {
  current: {
    date: string;
    city: string;
    region: string;
    temp: number;
    condition: string;
    iconCode: number;
    isDay: boolean;
    windSpeed: number;
    humidity: number;
    chanceOfRain: number;
  };
  hourlyToday: HourlyTodayForecast[];
  nextDays: NextDayForecast[];
}

export interface NextDayForecast {
  date: string;
  maxTemp: number;
  minTemp: number;
  condition: string;
  iconCode: number;
}

export interface HourlyTodayForecast {
  time: string;
  temp: number;
  isDay: boolean;
  iconCode: number;
  condition: string;
}

export interface ForecastApi {
  location: CurrentLocationApi;
  current: CurrentWeatherApi;
  forecast: ForecastDayApi;
}

export interface CurrentLocationApi {
  name: string;
  region: string;
  country: string;
  localtime: string;
}

export interface CurrentWeatherApi {
  temp_c: number;
  is_day: number;
  condition: {
    text: string;
    code: number;
  };
  wind_kph: number;
  pressure_mb: number;
  precip_mm: number;
  humidity: number;
}

export interface ForecastDayApi {
  forecastday: {
    date: string;
    day: {
      maxtemp_c: number;
      mintemp_c: number;
      avgtemp_c: number;
      daily_chance_of_rain: number;
      condition: {
        text: string;
        code: number;
      };
    };
    hour: {
      time: string;
      temp_c: number;
      is_day: number;
      condition: {
        text: string;
        code: number;
      };
    }[];
  }[];
}
