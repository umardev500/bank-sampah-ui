import { SheetButtonGroup } from 'components/molecules';
import { colors } from 'constants/colors';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const SheetBottom: React.FC = () => {
  return (
    <View style={styles.bottom}>
      <View style={styles.total}>
        <Text style={styles.totalText}>Total Transaksi</Text>
        <Text style={styles.totalPrice}>Rp50.000</Text>
      </View>
      <SheetButtonGroup />
    </View>
  );
};

const styles = StyleSheet.create({
  inner: {},
  label: {
    fontSize: 16,
    color: colors.gray.gray600,
    fontFamily: 'Roboto-Medium',
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
  },
  green: {
    color: colors.green.green600,
  },
  bottom: {},
  total: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  totalText: {
    color: colors.gray.gray600,
    fontFamily: 'Roboto-Medium',
  },
  totalPrice: {
    fontFamily: 'Roboto-Medium',
    color: colors.gray.gray600,
  },
});
