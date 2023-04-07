import {Section} from 'components/atoms';
import {ActivityListing} from 'components/molecules';
import React from 'react';
import {StyleSheet, View} from 'react-native';

export const ActivityList: React.FC = () => {
  return (
    <View style={styles.container}>
      <Section label="Sampah Saya" />

      <View style={styles.list}>
        <ActivityListing />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  list: {
    gap: 16,
  },
});
