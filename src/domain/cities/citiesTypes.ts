export interface CitiesApi {
  name: string;
  latitude: number;
  longitude: number;
  country: string;
  population: number;
  is_capital: boolean;
}

export interface City {
  name: string;
  latitude: number;
  longitude: number;
  country: string;
}
