import { NotificationList } from 'components/organisms';
import { colors } from 'constants/colors';
import React from 'react';
import { StyleSheet, View } from 'react-native';

export const Notification: React.FC = () => {
  return (
    <View style={styles.root}>
      <NotificationList />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
