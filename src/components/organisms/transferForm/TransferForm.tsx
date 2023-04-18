import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Button, Input } from 'components/atoms';
import React, { useCallback } from 'react';
import { StyleSheet, Vibration, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { RootStack } from 'types/rootStack';

type NavigationProps = StackNavigationProp<RootStack>;

export const TransferForm: React.FC = () => {
  const navigation = useNavigation<NavigationProps>();

  const handlePressQR = useCallback(() => {
    Vibration.vibrate(100);
  }, []);

  const handleNext = useCallback(() => {
    navigation.navigate('transferValue');
  }, []);

  return (
    <View style={styles.root}>
      <View style={styles.form}>
        <Input
          placeholder="Masukan nomor akun*"
          inputRight={<Icon onPress={handlePressQR} name="qrcode" size={24} />}
        />
        <Input placeholder="Pesan" />
      </View>

      <Button onPress={handleNext} opacity={0.7} text="Selanjutnya" />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'space-between',
  },
  form: {
    gap: 24,
  },
});
