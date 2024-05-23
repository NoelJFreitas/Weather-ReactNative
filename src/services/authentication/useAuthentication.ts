import {create} from 'zustand';
import {AuthenticationStore} from './authenticationTypes';
import {persist} from 'zustand/middleware';
import {storage} from '../storage';

const useAuthenticationStore = create<AuthenticationStore>()(
  persist(
    set => ({
      isLogged: false,
      setIsLogged: isLogged => set({isLogged}),
    }),
    {
      name: '@Credentials',
      storage: storage,
    },
  ),
);

export function useAuthentication(): AuthenticationStore['isLogged'] {
  const isLogged = useAuthenticationStore(state => state.isLogged);
  return isLogged;
}

export function useAuthenticationService(): AuthenticationStore['setIsLogged'] {
  const setIsLogged = useAuthenticationStore(state => state.setIsLogged);
  return setIsLogged;
}
