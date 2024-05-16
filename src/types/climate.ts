export type ClimateTypes = 'rays' | 'sunny' | 'cloudy' | 'storm' | 'rain';

export interface HourlyWeatherType {
  hour: string;
  temperature: string;
  climate: ClimateTypes;
}
