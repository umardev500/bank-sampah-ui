import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { colors } from 'constants/colors';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BottomSheet } from '../bottomSheet';
import { SheetBottom } from '../sheetBottom';
import { TransferDetailList } from '../transferDetailList';

export const TransactionDetailSheet = React.forwardRef<BottomSheetModal, any>(
  (_, ref) => {
    return (
      <BottomSheet ref={ref}>
        <>
          <Text style={styles.label}>Detail Transaksi</Text>
          <View style={styles.content}>
            <TransferDetailList />
            <SheetBottom />
          </View>
        </>
      </BottomSheet>
    );
  },
);

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
});
