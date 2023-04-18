import { TransferForm } from 'components/organisms';
import { colors } from 'constants/colors';
import React from 'react';
import { StyleSheet, View } from 'react-native';

export const Transfer: React.FC = () => {
  return (
    <View style={styles.root}>
      <TransferForm />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 24,
    backgroundColor: colors.white,
  },
});
