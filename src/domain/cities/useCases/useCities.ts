import {useMutation} from '@tanstack/react-query';
import {citiesService} from '../citiesService';
import {City} from '../citiesTypes';
import {MutationOptions} from '@infra';

interface Variables {
  cityName: string;
}

export function useCities(options?: MutationOptions<City[]>) {
  const mutation = useMutation<City[], Error, Variables>({
    mutationFn: ({cityName}) => {
      console.log('rodou');
      return citiesService.getCityByName(cityName);
    },
    retry: false,
    onError: error => console.log(error),
    onSuccess: cities => {
      if (options?.onSuccess) {
        options.onSuccess(cities);
      }
    },
  });

  return {
    isLoading: mutation.isPending,
    isError: mutation.isError,
    cities: mutation.data,
    getCities: (variables: Variables) => mutation.mutate(variables),
  };
}
