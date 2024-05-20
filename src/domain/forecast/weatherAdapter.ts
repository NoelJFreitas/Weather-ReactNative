import {ForecastApi, Weather} from './weatherTypes';

function toWeatherApi(weatherApi: ForecastApi): Weather {
  const hourlyForecast = weatherApi.forecast.forecastday[0].hour.map(
    ({condition, temp_c, time}) => {
      return {
        temp: temp_c,
        condition: condition.text,
        time: time,
      };
    },
  );

  const nextDayForecast: Weather['nextDays'] = [];
  weatherApi.forecast.forecastday.map((day, i) => {
    if (i !== 0) {
      nextDayForecast.push({
        date: day.date,
        maxTemp: day.day.maxtemp_c,
        minTemp: day.day.mintemp_c,
        condition: day.day.condition.text,
      });
    }
  });

  let weather: Weather = {
    city: weatherApi.location.name,
    region: weatherApi.location.country,
    current: {
      chanceOfRain: weatherApi.forecast.forecastday[0].day.daily_chance_of_rain,
      condition: weatherApi.current.condition.text,
      temp: weatherApi.current.temp_c,
      humidity: weatherApi.current.humidity,
      windSpeed: weatherApi.current.wind_kph,
      hourlyForecast: hourlyForecast,
    },
    nextDays: nextDayForecast,
  };

  return weather;
}

export const weatherAdapter = {
  toWeatherApi,
};
