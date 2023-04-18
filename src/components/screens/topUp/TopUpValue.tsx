import {Header, Keyboard, ValueView} from 'components/organisms';
import {colors} from 'constants/colors';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const TopUpValue: React.FC = () => {
  return (
    <View style={styles.root}>
      <Header title="Alfamart" />
      <ValueView />
      <View style={styles.keyboard}>
        <Keyboard />
        <View>
          <View>
            <Text>Total Pembayaran</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.white,
  },
  keyboard: {
    elevation: 8,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});
