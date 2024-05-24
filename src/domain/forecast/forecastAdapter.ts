import {CurrentForecast, ForecastApi} from './forecastTypes';

function toForecastApi(forecastApi: ForecastApi): CurrentForecast {
  const hourlyForecast = forecastApi.forecast.forecastday[0].hour.map(
    ({condition, temp_c, time}) => {
      return {
        temp: temp_c,
        condition: condition.text,
        time: time,
      };
    },
  );

  const nextDayForecast: CurrentForecast['nextDays'] = [];
  forecastApi.forecast.forecastday.map((day, i) => {
    if (i !== 0) {
      nextDayForecast.push({
        date: day.date,
        maxTemp: day.day.maxtemp_c,
        minTemp: day.day.mintemp_c,
        condition: day.day.condition.text,
      });
    }
  });

  let weather: CurrentForecast = {
    city: forecastApi.location.name,
    region: forecastApi.location.country,
    current: {
      chanceOfRain:
        forecastApi.forecast.forecastday[0].day.daily_chance_of_rain,
      condition: forecastApi.current.condition.text,
      temp: forecastApi.current.temp_c,
      humidity: forecastApi.current.humidity,
      windSpeed: forecastApi.current.wind_kph,
      hourlyForecast: hourlyForecast,
    },
    nextDays: nextDayForecast,
  };

  return weather;
}

export const forecastAdapter = {
  toForecastApi,
};
