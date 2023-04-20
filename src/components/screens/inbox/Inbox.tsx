import { InboxList } from 'components/organisms';
import { colors } from 'constants/colors';
import React from 'react';
import { StyleSheet, View } from 'react-native';

export const Inbox: React.FC = () => {
  return (
    <View style={styles.root}>
      <InboxList />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
