import { useCallback } from 'react';
import { Vibration } from 'react-native';

export const useClearInput = (
  setState: React.Dispatch<React.SetStateAction<string>>,
) => {
  const clearHandler = useCallback(() => {
    Vibration.vibrate(100);
    setState('0');
  }, []);

  return clearHandler;
};
