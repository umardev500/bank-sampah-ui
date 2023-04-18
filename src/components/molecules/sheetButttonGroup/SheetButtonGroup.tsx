import { Button } from 'components/atoms';
import { colors } from 'constants/colors';
import React from 'react';
import { View, StyleSheet } from 'react-native';

interface Props {
  onCancle?: () => void;
  onConfirm?: () => void;
}

export const SheetButtonGroup: React.FC<Props> = ({ onCancle, onConfirm }) => {
  return (
    <View style={styles.buttonContainer}>
      <Button
        onPress={onCancle}
        opacity={0.6}
        color={colors.primary}
        containerStyle={[styles.button, styles.secondary]}
        text="Batalakan"
      />
      <Button
        onPress={onConfirm}
        opacity={0.6}
        containerStyle={styles.button}
        text="Konfirmasi"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inner: {},
  label: {
    fontSize: 16,
    color: colors.gray.gray600,
    fontFamily: 'Roboto-Medium',
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
  },
  green: {
    color: colors.green.green600,
  },
  bottom: {},
  total: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  totalText: {
    color: colors.gray.gray600,
    fontFamily: 'Roboto-Medium',
  },
  totalPrice: {
    fontFamily: 'Roboto-Medium',
    color: colors.gray.gray600,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
    gap: 16,
  },
  button: {
    flex: 1,
  },
  secondary: {
    backgroundColor: '#E9E9F3',
  },
});
