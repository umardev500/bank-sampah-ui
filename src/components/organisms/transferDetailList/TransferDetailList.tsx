import { TransactionListing } from 'components/molecules';
import { colors } from 'constants/colors';
import React from 'react';
import { StyleSheet, View } from 'react-native';

export const TransferDetailList: React.FC = () => {
  return (
    <View style={styles.list}>
      <TransactionListing
        containerStyle={styles.listing}
        noBorder
        title="Penerima"
        value="Mark Klark"
      />
      <TransactionListing
        containerStyle={styles.listing}
        noBorder
        title="Nominal Transaksi"
        value="Rp50.000"
      />
      <TransactionListing
        containerStyle={styles.listing}
        noBorder
        title="Biaya Transaksi"
        value="Gratis"
        valueStyle={styles.green}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    marginTop: 20,
    borderBottomWidth: 1,
    borderStyle: 'dashed',
    borderBottomColor: colors.gray.gray300,
    paddingBottom: 16,
  },
  listing: {
    paddingTop: 11,
    paddingBottom: 11,
  },
  green: {
    color: colors.green.green600,
  },
});
