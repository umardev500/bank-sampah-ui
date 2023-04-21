import { colors } from 'constants/colors';
import React from 'react';
import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';

interface Props {
  label: string;
  children?: React.ReactElement[] | React.ReactElement;
  containerStyle?: StyleProp<ViewStyle>;
}

export const SettingList: React.FC<Props> = ({
  label,
  children,
  containerStyle,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={styles.label}>{label}</Text>

      <View style={styles.list}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  label: {
    color: colors.gray.gray400,
    marginBottom: 10,
    paddingLeft: 16,
  },
  list: {
    backgroundColor: colors.white,
    padding: 4,
    borderRadius: 8,
    gap: 4,
  },
});
