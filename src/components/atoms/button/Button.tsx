import { colors } from 'constants/colors';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface Props {
  opacity?: number;
}

export const Button: React.FC<Props> = ({ opacity = 0.5 }) => {
  return (
    <TouchableOpacity activeOpacity={opacity} style={styles.root}>
      <Text style={styles.text}>Submit</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: colors.primary,
    paddingTop: 13,
    paddingBottom: 13,
    flexGrow: 1,
    paddingLeft: 16,
    paddingRight: 16,
    borderRadius: 100,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    color: colors.white,
    fontFamily: 'Roboto-Medium',
  },
});
