import { Price } from 'components/atoms';
import { TransferDetail, TransferReceiver } from 'components/organisms';
import { colors } from 'constants/colors';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export const TransferInfo: React.FC = () => {
  return (
    <ScrollView>
      <View style={styles.root}>
        <View style={styles.heading}>
          <Image
            style={styles.verifyIcon}
            source={require('assets/icons/verify.png')}
          />
          <Text style={styles.text}>Pembayaran Diterima</Text>
          <Price currency="Rp" price="5000" />
        </View>
        <TransferReceiver />
        <TransferDetail />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 24,
    backgroundColor: colors.gray.gray50,
  },
  heading: {
    marginTop: 40,
    alignItems: 'center',
  },
  verifyIcon: {
    width: 90,
    height: 90,
  },
  text: {
    fontSize: 16,
    color: colors.gray.gray500,
    fontFamily: 'Roboto-Regular',
    marginTop: 4,
    marginBottom: 4,
  },
  price: {
    fontSize: 40,
    fontFamily: 'Roboto-Medium',
    color: colors.gray.gray600,
  },
});
