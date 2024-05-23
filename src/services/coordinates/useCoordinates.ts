import {useContext} from 'react';
import {CoordinatesContext} from './provider/CoordinatesProvider';

export function useCoordinates() {
  const context = useContext(CoordinatesContext);
  if (!context) {
    throw new Error('Coordinates should be used within a CoordinatesProvider');
  }
  return context;
}
