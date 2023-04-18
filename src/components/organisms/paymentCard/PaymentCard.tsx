import { PaymentCardHeading, PaymentCardInfo } from 'components/molecules';
import { colors } from 'constants/colors';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

export const PaymentCard: React.FC = () => {
  return (
    <View style={styles.root}>
      <PaymentCardHeading />
      <View style={styles.body}>
        <View style={styles.qrContainer}>
          <Image style={styles.qr} source={require('assets/thumbs/qr.png')} />
        </View>

        <PaymentCardInfo />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: colors.white,
    borderRadius: 8,
    padding: 24,
  },
  body: {
    justifyContent: 'center',
    backgroundColor: colors.gray.gray100,
    borderRadius: 8,
    padding: 24,
    marginTop: 24,
  },
  qrContainer: {
    backgroundColor: colors.white,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    width: '100%',
    height: 218,
    overflow: 'hidden',
  },
  qr: {
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
  },
  text: {
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
    textAlign: 'center',
    color: colors.gray.gray500,
  },
});
