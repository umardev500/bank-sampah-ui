import {Listing} from 'components/molecules';
import React from 'react';
import {StyleSheet, View} from 'react-native';

export const PaymentList: React.FC = () => {
  return (
    <View style={styles.container}>
      <Listing
        icon={require('assets/icons/alfamart-logo.png')}
        title="Alfamart"
      />
      <Listing
        icon={require('assets/icons/indomaret-logo.png')}
        title="Indomaret"
      />
      <Listing
        icon={require('assets/icons/salary.png')}
        title="Bank Transfer"
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
