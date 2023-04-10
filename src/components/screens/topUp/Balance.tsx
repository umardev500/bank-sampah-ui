import {Header} from 'components/organisms';
import {colors} from 'constants/colors';
import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';

export const Balance: React.FC = () => {
  return (
    <>
      <StatusBar translucent={false} backgroundColor={colors.white} />
      <View style={styles.root}>
        <Header />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
