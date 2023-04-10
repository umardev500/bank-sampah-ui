import {Section} from 'components/atoms';
import {ActivityListing} from 'components/molecules';
import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';

export const ActivityList: React.FC = () => {
  return (
    <View style={styles.container}>
      <Section label="Sampah Saya" />

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.list}>
          <ActivityListing />
          <ActivityListing />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  list: {
    gap: 16,
    flexDirection: 'row',
    paddingBottom: 4,
  },
});
