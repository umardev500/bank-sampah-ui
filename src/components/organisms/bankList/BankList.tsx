import {Listing} from 'components/molecules';
import React from 'react';
import {StyleSheet, View} from 'react-native';

export const BankList: React.FC = () => {
  return (
    <View style={styles.container}>
      <Listing
        icon={require('assets/logos/permata-2.png')}
        title="BNI Virtual Account"
      />
      <Listing
        icon={require('assets/logos/bni.png')}
        title="BNI Virtual Account"
      />
      <Listing
        icon={require('assets/logos/briva.png')}
        title="BRI Virtual Account"
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
