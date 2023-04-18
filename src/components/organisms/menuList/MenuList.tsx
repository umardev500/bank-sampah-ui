import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { MenuListing } from 'components/molecules';
import React, { useCallback, useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import { TopUpBottomSheet } from '../topUpBottomSheet';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStack } from 'types/rootStack';

type NavigationProps = StackNavigationProp<RootStack>;

export const MenuList: React.FC = () => {
  const topUpRef = useRef<BottomSheetModal>(null);
  const navigation = useNavigation<NavigationProps>();

  const handlePressTopUp = useCallback(() => {
    topUpRef.current?.present();
  }, []);
  const handlePressTransfer = useCallback(() => {
    navigation.navigate('transfer');
  }, []);

  return (
    <>
      <View style={styles.container}>
        <MenuListing
          onPress={handlePressTopUp}
          text="Top Up"
          containerStyle={styles.item}
          source={require('assets/icons/topup.png')}
        />
        <MenuListing
          text="Transfer"
          containerStyle={styles.item}
          source={require('assets/icons/transfer.png')}
          onPress={handlePressTransfer}
        />
        <MenuListing
          text="Receive"
          containerStyle={styles.item}
          source={require('assets/icons/receive.png')}
        />
        <MenuListing
          text="Scan QR"
          containerStyle={styles.item}
          source={require('assets/icons/qr.png')}
        />
      </View>
      <TopUpBottomSheet ref={topUpRef} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    flexDirection: 'row',
    paddingTop: 16,
    paddingBottom: 16,
  },
  item: {
    flex: 1,
    alignItems: 'center',
    gap: 8,
  },
});
