import {
  SettingListChat,
  SettingListNotification,
  SettingListUser,
  SettingListWallet,
} from 'components/organisms';
import { colors } from 'constants/colors';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

export const Setting: React.FC = () => {
  return (
    <ScrollView>
      <View style={styles.root}>
        <SettingListUser />
        <SettingListWallet />
        <SettingListNotification />
        <SettingListChat />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.gray.gray50,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 20,
  },
});
