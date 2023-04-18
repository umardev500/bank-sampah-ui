import { colors } from 'constants/colors';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const PaymentCardHeading: React.FC = () => {
  return (
    <View style={styles.heading}>
      <Text style={styles.vendor}>Alfamart</Text>
      <Text style={styles.text}>Gunakan kode pembayaran berikut</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    alignItems: 'center',
    gap: 4,
  },
  vendor: {
    fontSize: 22,
    fontFamily: 'Roboto-Medium',
    color: colors.gray.gray600,
  },
  text: {
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
    textAlign: 'center',
    color: colors.gray.gray500,
  },
});
