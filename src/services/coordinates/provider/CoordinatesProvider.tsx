import React, {createContext, useEffect, useState} from 'react';
import Geolocation from '@react-native-community/geolocation';

import {Coordinates, CoordinatesService} from '../coordinatesTypes';
import {usePermission} from '@services';

export const CoordinatesContext = createContext<CoordinatesService>({
  coordinates: null,
  isLoading: false,
  changeCurrentCoordinates: () => {},
});

export function CoordinatesProvider({children}: React.PropsWithChildren<{}>) {
  const permission = usePermission('location_when_in_use');

  const [coordinates, setCoordinates] = useState<Coordinates | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  function changeCurrentCoordinates(coord: Coordinates) {
    setCoordinates(coord);
  }

  async function getCoordinateOfCurrentPosition() {
    try {
      setIsLoading(true);
      Geolocation.getCurrentPosition(
        ({coords}) => {
          setCoordinates({lat: coords.latitude, long: coords.longitude});
          setIsLoading(false);
        },
        error => {
          console.log(error);
          setIsLoading(false);
        },
      );
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (permission.status === 'granted') {
      getCoordinateOfCurrentPosition();
    }
  }, [permission.status]);

  return (
    <CoordinatesContext.Provider
      value={{coordinates, changeCurrentCoordinates, isLoading}}>
      {children}
    </CoordinatesContext.Provider>
  );
}
