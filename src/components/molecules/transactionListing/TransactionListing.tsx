import { colors } from 'constants/colors';
import React from 'react';
import { StyleProp, StyleSheet, Text, TextStyle, View } from 'react-native';

interface Props {
  title: string;
  value: string;
  valueStyle?: StyleProp<TextStyle>;
}

export const TransactionListing: React.FC<Props> = ({
  title,
  value,
  valueStyle,
}) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.title]}>{title}</Text>
      <Text style={[styles.value, valueStyle]}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 16,
    paddingBottom: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.gray.gray200,
  },
  title: {
    fontFamily: 'Roboto-Regular',
  },
  value: {
    fontFamily: 'Roboto-Medium',
    color: colors.gray.gray600,
  },
});
