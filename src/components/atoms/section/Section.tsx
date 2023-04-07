import {colors} from 'constants/colors';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

interface Props {
  label: String;
}

export const Section: React.FC<Props> = ({label}) => {
  return (
    <View style={styles.label}>
      <Text style={styles.labelText}>{label}</Text>
      <Image
        style={styles.arrow}
        source={require('assets/icons/arrow-right.png')}
      />
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
    fontSize: 18,
    color: colors.gray.gray600,
    fontWeight: '500',
  },
  arrow: {},
});
