import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { colors } from 'constants/colors';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BottomSheet } from '../bottomSheet';
import { SheetBottom } from '../sheetBottom';
import { TransferDetailList } from '../transferDetailList';

interface Props {
  onCancel?: () => void;
  onConfirm?: () => void;
}

export const TransactionDetailSheet = React.forwardRef<BottomSheetModal, Props>(
  ({ onCancel, onConfirm }, ref) => {
    return (
      <BottomSheet ref={ref}>
        <>
          <Text style={styles.label}>Detail Transaksi</Text>
          <View style={styles.content}>
            <TransferDetailList />
            <SheetBottom onCancel={onCancel} onConfirm={onConfirm} />
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
