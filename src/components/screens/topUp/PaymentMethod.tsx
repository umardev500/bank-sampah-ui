import { Header, PaymentList } from 'components/organisms';
import { colors } from 'constants/colors';
import React from 'react';
import { StyleSheet, View } from 'react-native';

export const PaymentMethod: React.FC = () => {
  return (
    <>
      <View style={styles.root}>
        <Header title="Metode Pembayaran" />
        <PaymentList />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
