export interface Coordinates {
  lat: number;
  long: number;
}

export interface CoordinatesService {
  coordinates: Coordinates | null;
  changeCurrentCoordinates: (coordinates: Coordinates) => Promise<void>;
  getCoordinateOfCurrentPosition: () => void;
  isLoading: boolean;
}
