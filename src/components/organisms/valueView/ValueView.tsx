import {colors} from 'constants/colors';
import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const ValueView: React.FC = () => {
  return (
    <ScrollView>
      <View style={styles.inner}>
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  inner: {
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 40,
    paddingBottom: 40,
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
