import {useMutation} from '@tanstack/react-query';
import {Coordinates} from '@services';
import {CurrentForecast} from '../forecastTypes';
import {forecastService} from '../forecastService';
import {useEffect} from 'react';

export function useForecast(coordinates: Coordinates | null) {
  const mutation = useMutation<CurrentForecast, Error, Coordinates>({
    mutationFn: coord => {
      return forecastService.getForecastByCoordinates(coord);
    },
    retry: false,
    onError: error => {
      console.log(error);
    },
  });

  useEffect(() => {
    if (coordinates) {
      mutation.mutate(coordinates);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [coordinates]);

  return {
    isLoading: mutation.isPending,
    forecast: mutation.data,
  };
}
