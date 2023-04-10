import {colors} from 'constants/colors';
import React from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

interface Props {
  title: string;
}

export const TopUpListing: React.FC<Props> = ({title}) => {
  return (
    <TouchableOpacity style={styles.item}>
      <View style={styles.itemRight}>
        <Text style={styles.title}>{title}</Text>
        <Image source={require('assets/icons/arrow-right.png')} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    paddingTop: 16,
  },
  itemRight: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    paddingBottom: 16,
    borderBottomColor: colors.gray.gray200,
  },
  title: {
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
    color: colors.gray.gray500,
  },
});
