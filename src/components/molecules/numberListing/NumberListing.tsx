import { colors } from 'constants/colors';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { KeyPad } from 'types/keyboard';

interface Props {
  value: KeyPad | React.ReactElement;
  isDelete?: boolean;
  onPress: (value: KeyPad) => void;
}

export const NumberListing: React.FC<Props> = ({
  value,
  isDelete = false,
  onPress,
}) => {
  const handleClick = () => {
    onPress(isDelete ? 'delete' : (value as KeyPad));
  };

  return (
    <TouchableOpacity style={styles.root} onPress={handleClick}>
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
