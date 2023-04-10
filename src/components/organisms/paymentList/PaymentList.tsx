import {PaymentListing} from 'components/molecules';
import React from 'react';
import {StyleSheet, View} from 'react-native';

export const PaymentList: React.FC = () => {
  return (
    <View style={styles.container}>
      <PaymentListing
        icon={require('assets/icons/alfamart-logo.png')}
        title="Alfamart"
        iconW={50}
        iconH={17}
      />
      <PaymentListing
        icon={require('assets/icons/indomaret-logo.png')}
        title="Indomaret"
        iconW={50}
        iconH={17}
      />
      <PaymentListing
        icon={require('assets/icons/salary.png')}
        title="Bank Transfer"
        iconW={34}
        iconH={34}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 16,
    paddingRight: 16,
  },
});
