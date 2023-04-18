import {BankList, Header} from 'components/organisms';
import {colors} from 'constants/colors';
import React from 'react';
import {StyleSheet, View} from 'react-native';

export const Bank: React.FC = () => {
  return (
    <View style={styles.root}>
      <Header title="Pilih Bank Tujuan" />
      <BankList />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
