import React, {createContext, useEffect, useState} from 'react';
import Geolocation from '@react-native-community/geolocation';

import {Coordinates, CoordinatesService} from '../coordinatesTypes';
import {usePermission} from '@services';
import {coordinatesStorage} from '../coordinatesStorage';

export const CoordinatesContext = createContext<CoordinatesService>({
  coordinates: null,
  isLoading: false,
  changeCurrentCoordinates: async () => {},
  getCoordinateOfCurrentPosition: () => {},
});

export function CoordinatesProvider({children}: React.PropsWithChildren<{}>) {
  const permission = usePermission('location_when_in_use');

  const [coordinates, setCoordinates] = useState<Coordinates | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  async function changeCurrentCoordinates(coord: Coordinates) {
    console.log(coord);
    setCoordinates(coord);
    await coordinatesStorage.set(coord);
  }

  function getCoordinateOfCurrentPosition() {
    Geolocation.getCurrentPosition(
      ({coords}) => {
        changeCurrentCoordinates({
          lat: coords.latitude,
          long: coords.longitude,
        });
      },
      err => console.log(err),
    );
  }

  async function verifyCoordinatesStorage() {
    try {
      setIsLoading(true);
      const coord = await coordinatesStorage.get();
      if (coord) {
        setCoordinates(coord);
        return;
      }
      console.log(permission.status);
      if (permission.status === 'granted') {
        await getCoordinateOfCurrentPosition();
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    verifyCoordinatesStorage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [permission.status]);

  return (
    <CoordinatesContext.Provider
      value={{
        coordinates,
        changeCurrentCoordinates,
        getCoordinateOfCurrentPosition,
        isLoading,
      }}>
      {children}
    </CoordinatesContext.Provider>
  );
}
