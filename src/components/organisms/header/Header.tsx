import {colors} from 'constants/colors';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

interface Props {
  title?: string;
}

export const Header: React.FC<Props> = ({title}) => {
  return (
    <SafeAreaView style={styles.root}>
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
  },
  container: {
    paddingLeft: 16,
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
