import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Button } from 'components/atoms';
import {
  Keyboard,
  TransactionDetailSheet,
  ValueView,
} from 'components/organisms';
import { colors } from 'constants/colors';
import { toPrice } from 'helpers/toPrice';
import { useClearInput } from 'hooks/useClearInput';
import { useDeleteKeyboardChar } from 'hooks/useDeleteKeyboardChar';
import { usePriceType } from 'hooks/usePriceType';
import React, { useCallback, useRef, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RootStack } from 'types/rootStack';

type NavigationProps = StackNavigationProp<RootStack>;

export const TransferValue: React.FC = () => {
  const sheetRef = useRef<BottomSheetModal>(null);
  const navigation = useNavigation<NavigationProps>();
  const [price, setPrice] = useState('0');

  const typeHandler = usePriceType(price, setPrice);

  const clearHandler = useClearInput(setPrice);

  const deleteHandler = useDeleteKeyboardChar(setPrice);

  const handleSubmit = () => {
    sheetRef.current?.present();
  };

  const handleCancel = useCallback(() => {
    sheetRef.current?.close();
  }, []);
  const handleConfirm = useCallback(() => {
    navigation.navigate('transferInfo');
  }, []);

  return (
    <View style={styles.root}>
      <View style={styles.inner}>
        <ValueView onClear={clearHandler} price={price} />
        <View style={styles.keyboard}>
          <Keyboard onDelete={deleteHandler} onPress={typeHandler} />
          <View style={styles.bottom}>
            <View style={styles.bottomLeft}>
              <Text style={styles.totalLabel}>Total Pembayaran</Text>
              <Text style={styles.totalPrice}>{toPrice(price, 'Rp')}</Text>
            </View>
            <Button
              containerStyle={styles.button}
              text="Submit"
              onPress={handleSubmit}
              opacity={0.7}
            />
          </View>
        </View>
      </View>

      <TransactionDetailSheet
        onCancel={handleCancel}
        onConfirm={handleConfirm}
        ref={sheetRef}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.white,
  },
  inner: {
    flex: 1,
    justifyContent: 'space-between',
  },
  keyboard: {
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
    gap: 10,
  },
  bottomLeft: {
    flexGrow: 1,
  },
  totalLabel: {
    color: colors.gray.gray400,
    fontFamily: 'Roboto-Medium',
  },
  totalPrice: {
    fontSize: 20,
    fontFamily: 'Roboto-Bold',
  },
  button: {
    flexGrow: 1,
  },
});
