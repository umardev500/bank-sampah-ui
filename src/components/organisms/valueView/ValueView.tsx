import {colors} from 'constants/colors';
import {toPrice} from 'helpers/toPrice';
import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props {
  price: string | number;
}

export const ValueView: React.FC<Props> = ({price}) => {
  return (
    <ScrollView>
      <View style={styles.inner}>
        <Text style={styles.label}>Nominal Saldo</Text>
        <View style={styles.valueView}>
          <View style={styles.priceContainer}>
            <Text style={styles.currency}>Rp</Text>
            <Text style={styles.price}>{toPrice(price)}</Text>
          </View>

          <Icon
            onPress={() => console.log('click')}
            style={styles.closeIcon}
            name="close-circle"
            size={20}
          />
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
    overflow: 'hidden',
    flex: 1,
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
  additionalFee: {
    color: colors.gray.gray500,
    fontFamily: 'Roboto-Medium',
    marginTop: 8,
  },
});
