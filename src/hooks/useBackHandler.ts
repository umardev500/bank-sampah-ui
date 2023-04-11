import {useEffect} from 'react';
import {Alert, BackHandler} from 'react-native';

export const useBackHandler = () => {
  useEffect(() => {
    const backAction = () => {
      Alert.alert('Hold on!', 'Are you sure want to go back?', [
        {
          text: 'Cancel',
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: () => BackHandler.exitApp(),
        },
      ]);

      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);
};
