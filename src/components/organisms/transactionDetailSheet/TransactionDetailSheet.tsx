import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { TransactionListing } from 'components/molecules';
import { colors } from 'constants/colors';
import React, { useEffect, useRef } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BottomSheet } from '../bottomSheet';
import { Button } from 'components/atoms';

export const TransactionDetailSheet: React.FC = () => {
  const ref = useRef<BottomSheetModal>(null);

  useEffect(() => {
    ref.current?.present();
  }, []);

  return (
    <BottomSheet ref={ref}>
      <>
        <Text style={styles.label}>Detail Transaksi</Text>
        <View style={styles.content}>
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
          <View style={styles.bottom}>
            <View style={styles.total}>
              <Text style={styles.totalText}>Total Transaksi</Text>
              <Text style={styles.totalPrice}>Rp50.000</Text>
            </View>
            <View style={styles.buttonContainer}>
              <Button
                opacity={0.6}
                color={colors.primary}
                containerStyle={[styles.button, styles.secondary]}
                text="Batalakan"
              />
              <Button
                opacity={0.6}
                containerStyle={styles.button}
                text="Konfirmasi"
              />
            </View>
          </View>
        </View>
      </>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  inner: {},
  label: {
    fontSize: 16,
    color: colors.gray.gray600,
    fontFamily: 'Roboto-Medium',
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
  },
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
  bottom: {},
  total: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  totalText: {
    color: colors.gray.gray600,
    fontFamily: 'Roboto-Medium',
  },
  totalPrice: {
    fontFamily: 'Roboto-Medium',
    color: colors.gray.gray600,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
    gap: 16,
  },
  button: {
    flex: 1,
  },
  secondary: {
    backgroundColor: '#E9E9F3',
  },
});
