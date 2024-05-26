import {CurrentForecast, ForecastApi} from './forecastTypes';

function toForecastApi(forecastApi: ForecastApi): CurrentForecast {
  const currentDate = new Date();
  const forecastPerHourDayApi = forecastApi.forecast.forecastday[0].hour;
  const hourlyForecast = [];

  for (let i = 0; i < forecastPerHourDayApi.length; i++) {
    const {condition, is_day, temp_c, time} = forecastPerHourDayApi[i];
    const forecastDatePi = new Date(time);
    if (forecastDatePi.getHours() > currentDate.getHours()) {
      hourlyForecast.push({
        temp: temp_c,
        condition: condition.text,
        time: time,
        iconCode: condition.code,
        isDay: is_day === 1 ? true : false,
      });
    }
  }

  const nextDayForecast: CurrentForecast['nextDays'] = [];
  forecastApi.forecast.forecastday.map((day, i) => {
    if (i > 1) {
      nextDayForecast.push({
        date: day.date,
        maxTemp: day.day.maxtemp_c,
        minTemp: day.day.mintemp_c,
        condition: day.day.condition.text,
        iconCode: day.day.condition.code,
      });
    }
  });

  let weather: CurrentForecast = {
    current: {
      date: forecastApi.location.localtime,
      city: forecastApi.location.name,
      isDay: forecastApi.current.is_day === 1 ? true : false,
      region: forecastApi.location.country,
      iconCode: forecastApi.current.condition.code,
      chanceOfRain:
        forecastApi.forecast.forecastday[0].day.daily_chance_of_rain,
      condition: forecastApi.current.condition.text,
      temp: forecastApi.current.temp_c,
      humidity: forecastApi.current.humidity,
      windSpeed: forecastApi.current.wind_kph,
    },
    hourlyToday: hourlyForecast,
    nextDays: nextDayForecast,
  };

  return weather;
}

export const forecastAdapter = {
  toForecastApi,
};
