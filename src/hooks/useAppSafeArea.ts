import {useSafeAreaInsets} from 'react-native-safe-area-context';

export function useAppSafeArea() {
  const {bottom, top} = useSafeAreaInsets();
  return {
    top,
    bottom,
  };
}
