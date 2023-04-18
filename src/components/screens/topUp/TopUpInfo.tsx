import { PaymentCard } from 'components/organisms';
import React from 'react';
import { StyleSheet, View } from 'react-native';

export const TopUpInfo: React.FC = () => {
  return (
    <View style={styles.root}>
      <PaymentCard />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 24,
  },
});
