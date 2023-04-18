import { TransactionListing } from 'components/molecules';
import { colors } from 'constants/colors';
import { toPrice } from 'helpers/toPrice';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const TransferDetail: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Detail Transaksi</Text>

      <View style={styles.detailList}>
        <TransactionListing title="Produk" value="Transfer" />
        <TransactionListing
          valueStyle={styles.green}
          title="Biaya Layanan"
          value="Gratis"
        />
        <TransactionListing
          title="Nominal Transaksi"
          value={toPrice('5000', 'Rp')}
        />
        <TransactionListing title="Nomor Transaksi" value="100289792838293" />
        <TransactionListing
          title="Waktu Pembayarab"
          value="14 Apr, 2023 15:25"
        />
        <TransactionListing
          valueStyle={styles.green}
          title="Status"
          value="Pending"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: 24,
    borderRadius: 8,
    marginTop: 16,
  },
  detailList: {
    marginTop: 20,
  },
  label: {
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
    color: colors.gray.gray600,
  },
  green: {
    color: colors.green.green600,
  },
});
