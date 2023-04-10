import {colors} from 'constants/colors';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const Header: React.FC = () => {
  return (
    <View style={styles.root}>
      <View>
        <Text style={styles.title}>Metode Pembayaran</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: colors.white,
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 4,
  },
  title: {
    fontSize: 18,
    fontFamily: 'Roboto-Medium',
    color: colors.gray.gray600,
  },
});
