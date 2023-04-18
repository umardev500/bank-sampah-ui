import {Button} from 'components/atoms';
import {Header, Keyboard, ValueView} from 'components/organisms';
import {colors} from 'constants/colors';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const TopUpValue: React.FC = () => {
  return (
    <View style={styles.root}>
      <Header title="Alfamart" />
      <ValueView />
      <View style={styles.keyboard}>
        <Keyboard />
        <View style={styles.bottom}>
          <View style={styles.bottomLeft}>
            <Text style={styles.totalLabel}>Total Pembayaran</Text>
            <Text style={styles.totalPrice}>Rp55.000</Text>
          </View>
          <Button opacity={0.7} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.white,
  },
  keyboard: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.white,
    elevation: 8,
    paddingLeft: 24,
    paddingRight: 24,
    paddingBottom: 24,
    paddingTop: 16,
  },
  bottom: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 24,
  },
  bottomLeft: {
    flex: 1,
  },
  totalLabel: {
    color: colors.gray.gray400,
    fontFamily: 'Roboto-Medium',
  },
  totalPrice: {
    fontSize: 20,
    fontFamily: 'Roboto-Bold',
  },
});
