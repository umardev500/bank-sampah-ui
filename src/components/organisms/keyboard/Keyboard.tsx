import {NumberListing} from 'components/molecules';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {KeyPad} from 'types/keyboard';

interface Props {
  onPress: (value: KeyPad) => void;
}

export const Keyboard = React.memo(({onPress}: Props) => {
  const deleteIcon = <Icon name="close-circle" size={24} />;

  return (
    <View style={styles.root}>
      <View style={styles.row}>
        <NumberListing onPress={onPress} value="1" />
        <NumberListing onPress={onPress} value="2" />
        <NumberListing onPress={onPress} value="3" />
      </View>
      <View style={styles.row}>
        <NumberListing onPress={onPress} value="4" />
        <NumberListing onPress={onPress} value="5" />
        <NumberListing onPress={onPress} value="6" />
      </View>
      <View style={styles.row}>
        <NumberListing onPress={onPress} value="7" />
        <NumberListing onPress={onPress} value="8" />
        <NumberListing onPress={onPress} value="9" />
      </View>
      <View style={styles.row}>
        <NumberListing onPress={onPress} value="0" />
        <NumberListing onPress={onPress} value="000" />
        <NumberListing isDelete onPress={onPress} value={deleteIcon} />
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'white',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 20,
    height: 70,
  },
});
