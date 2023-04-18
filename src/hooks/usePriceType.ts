import React from 'react';
import { Vibration } from 'react-native';
import { KeyPad } from 'types/keyboard';

export const usePriceType = (
  price: string,
  setPrice: React.Dispatch<React.SetStateAction<string>>,
) => {
  const typeHandler = (value: KeyPad) => {
    Vibration.vibrate(100);

    let isOk = true;
    if (price.charAt(0) === '0') {
      // check for price is zero value
      if (value === '0' || value === '000') {
        // check if inputted value is 0 or 000
        isOk = false;
      }
    }

    if (value !== 'delete' && isOk) {
      // check for inputted value not delete and isOK to true
      setPrice(prev => {
        let result: KeyPad = '0';
        if (prev !== '0') {
          result = (prev + value) as KeyPad;
        } else {
          result = value;
        }

        return result;
      });
    }
  };

  return typeHandler;
};
