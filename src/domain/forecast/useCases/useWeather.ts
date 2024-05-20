import {useMutation} from '@tanstack/react-query';
import {MutationOptions} from '@infra';
import {Weather} from '../weatherTypes';
import {weatherService} from '../weatherService';

interface Variables {
  lat: string;
  lon: string;
}

export function useWeather(options?: MutationOptions<Weather>) {
  const mutation = useMutation<Weather, Error, Variables>({
    mutationFn: ({lat, lon}) => {
      return weatherService.getWeatherByLatLog(lat, lon);
    },
    retry: false,
    onError: error => console.log(error),
    onSuccess: weather => {
      if (options?.onSuccess) {
        options.onSuccess(weather);
      }
    },
  });

  return {
    isLoading: mutation.isPending,
    isError: mutation.isError,
    weather: mutation.data,
    getWeather: (variables: Variables) => mutation.mutate(variables),
  };
}
