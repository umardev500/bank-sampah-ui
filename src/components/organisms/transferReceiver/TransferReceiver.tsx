import { ReceiverInfo } from 'components/molecules/receiverInfo/ReceiverInfo';
import { colors } from 'constants/colors';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const TransferReceiver: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Penerima</Text>
      <ReceiverInfo />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: 24,
    borderRadius: 8,
    marginTop: 40,
  },
  label: {
    fontFamily: 'Roboto-Medium',
    color: colors.gray.gray500,
  },
});
