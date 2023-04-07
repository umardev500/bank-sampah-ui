import {MenuListing} from 'components/molecules';
import React from 'react';
import {StyleSheet, View} from 'react-native';

export const MenuList: React.FC = () => {
  return (
    <View style={styles.container}>
      <MenuListing
        text="Top Up"
        containerStyle={styles.item}
        source={require('assets/icons/topup.png')}
      />
      <MenuListing
        text="Transfer"
        containerStyle={styles.item}
        source={require('assets/icons/transfer.png')}
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
