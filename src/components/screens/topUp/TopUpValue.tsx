import {Header, Keyboard, ValueView} from 'components/organisms';
import {colors} from 'constants/colors';
import React from 'react';
import {StyleSheet, View} from 'react-native';

export const TopUpValue: React.FC = () => {
  return (
    <View style={styles.root}>
      <Header title="Alfamart" />
      <ValueView />
      <Keyboard />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
