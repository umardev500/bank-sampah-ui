import { Button, Input } from 'components/atoms';
import React, { useCallback } from 'react';
import { StyleSheet, Vibration, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const TransferForm: React.FC = () => {
  const handlePressQR = useCallback(() => {
    Vibration.vibrate(100);
  }, []);

  const handleNext = useCallback(() => {
    Vibration.vibrate(100);
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
