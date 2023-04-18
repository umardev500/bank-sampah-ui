import { colors } from 'constants/colors';
import { toPrice } from 'helpers/toPrice';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface Props {
  currency: string;
  price: string;
}

export const Price: React.FC<Props> = ({ currency, price }) => {
  return (
    <View style={styles.priceContainer}>
      <Text style={styles.currency}>{currency}</Text>
      <Text style={styles.price}>{toPrice(price)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  priceContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  currency: {
    fontSize: 28,
    fontFamily: 'Roboto-Bold',
    color: colors.gray.gray600,
  },
  price: {
    fontSize: 40,
    fontFamily: 'Roboto-Bold',
    color: colors.gray.gray600,
  },
});
