import {colors} from 'constants/colors';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

interface Props {
  value: string | React.ReactElement;
}

export const NumberListing: React.FC<Props> = ({value}) => {
  return (
    <TouchableOpacity style={styles.root}>
      <Text style={styles.text}>{value}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: colors.gray.gray500,
    fontSize: 26,
    fontFamily: 'Roboto-Bold',
  },
});
