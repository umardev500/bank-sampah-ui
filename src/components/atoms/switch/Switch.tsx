import { colors } from 'constants/colors';
import React from 'react';
import { StyleSheet, View } from 'react-native';

export const Switch: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.bullet} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    padding: 4,
    borderRadius: 19,
    width: 36,
  },
  bullet: {
    width: 14,
    height: 14,
    borderRadius: 12,
    backgroundColor: colors.white,
  },
});
