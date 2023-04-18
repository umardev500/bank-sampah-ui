import {NumberListing} from 'components/molecules';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const Keyboard: React.FC = () => {
  const deleteIcon = <Icon name="close-circle" size={24} />;

  return (
    <View style={styles.root}>
      <View style={styles.row}>
        <NumberListing value="1" />
        <NumberListing value="2" />
        <NumberListing value="3" />
      </View>
      <View style={styles.row}>
        <NumberListing value="4" />
        <NumberListing value="5" />
        <NumberListing value="6" />
      </View>
      <View style={styles.row}>
        <NumberListing value="7" />
        <NumberListing value="8" />
        <NumberListing value="9" />
      </View>
      <View style={styles.row}>
        <NumberListing value="0" />
        <NumberListing value="000" />
        <NumberListing value={deleteIcon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'white',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 20,
    height: 80,
  },
});
