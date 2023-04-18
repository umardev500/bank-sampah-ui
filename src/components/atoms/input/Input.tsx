import { colors } from 'constants/colors';
import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

interface Props {
  placeholder?: string;
  inputRight?: React.ReactElement;
}

export const Input: React.FC<Props> = ({ placeholder, inputRight }) => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder={placeholder} />
      {inputRight}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.gray.gray200,
  },
  input: {
    flex: 1,
    paddingTop: 14,
    paddingBottom: 14,
    fontSize: 16,
    color: colors.gray.gray500,
    fontFamily: 'Roboto-Regular',
  },
});
