import { useCallback } from 'react';
import { Vibration } from 'react-native';

export const useDeleteKeyboardChar = (
  setState: React.Dispatch<React.SetStateAction<string>>,
) => {
  const deleteHandler = useCallback(() => {
    Vibration.vibrate(100);

    setState(prev => {
      let result = '0';
      const len = prev.length;
      if (len > 0 && len !== 1) {
        result = prev.substring(0, len - 1);
      }

      return result;
    });
  }, []);

  return deleteHandler;
};
