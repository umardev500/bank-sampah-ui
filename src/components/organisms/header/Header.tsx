import {colors} from 'constants/colors';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

interface Props {
  title?: string;
}

export const Header: React.FC<Props> = ({title}) => {
  return (
    <SafeAreaView style={styles.root}>
      <Image
        style={styles.arrow}
        source={require('assets/icons/arrow-back.png')}
      />
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: colors.white,
    elevation: 4,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 16,
    paddingRight: 16,
  },
  arrow: {
    width: 24,
    height: 24,
  },
  container: {
    paddingLeft: 24,
    paddingRight: 16,
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontFamily: 'Roboto-Medium',
    color: colors.gray.gray600,
  },
});
