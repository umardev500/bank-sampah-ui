import { colors } from 'constants/colors';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const PaymentCardInfo: React.FC = () => {
  return (
    <View style={styles.infoContainer}>
      <View style={styles.expContainer}>
        <Text style={styles.text}>Expired</Text>
        <Text style={[styles.text, styles.expTime]}>24 Mar, 2023 18:00</Text>
      </View>
      <Text style={styles.price}>IDR55.000</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
    textAlign: 'center',
    color: colors.gray.gray500,
  },
  infoContainer: {
    marginTop: 24,
    overflow: 'hidden',
  },
  expContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 5,
  },
  expTime: {
    color: colors.green.green600,
  },
  price: {
    fontFamily: 'Roboto-Bold',
    fontSize: 28,
    textAlign: 'center',
    color: colors.gray.gray500,
    marginTop: 10,
  },
});
