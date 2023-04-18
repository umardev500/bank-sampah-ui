import {colors} from 'constants/colors';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const ValueView: React.FC = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.label}>Nominal Saldo</Text>
      <View style={styles.valueView}>
        <View style={styles.priceContainer}>
          <Text style={styles.currency}>Rp</Text>
          <Text style={styles.price}>50.000</Text>
        </View>

        <Icon style={styles.closeIcon} name="close-circle" size={20} />
      </View>
      <Text style={styles.additionalFee}>+ Rp5.000 biaya admin</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    paddingLeft: 24,
    paddingRight: 24,
    marginTop: 40,
  },
  label: {
    fontSize: 16,
    color: colors.gray.gray400,
    fontFamily: 'Roboto-Medium',
  },
  valueView: {
    marginTop: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  closeIcon: {
    color: colors.gray.gray400,
  },
  priceContainer: {
    flexDirection: 'row',
  },
  currency: {
    fontSize: 28,
    fontFamily: 'Roboto-Bold',
  },
  price: {
    fontSize: 40,
    fontFamily: 'Roboto-Bold',
  },
  additionalFee: {
    color: colors.gray.gray500,
    fontFamily: 'Roboto-Medium',
    marginTop: 8,
  },
});
