import { colors } from 'constants/colors';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface Props {
  label: String;
}

export const Section: React.FC<Props> = ({ label }) => {
  return (
    <View style={styles.label}>
      <Text style={styles.labelText}>{label}</Text>
      <Icon name="keyboard-arrow-right" size={24} color={colors.gray.gray400} />
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  labelText: {
    fontSize: 16,
    color: colors.gray.gray600,
    fontFamily: 'Roboto-Medium',
  },
  arrow: {},
});
