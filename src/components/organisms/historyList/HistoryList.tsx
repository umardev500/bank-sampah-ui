import {Section} from 'components/atoms';
import {HistoryListing} from 'components/molecules';
import React from 'react';
import {StyleSheet, View} from 'react-native';

export const HistoryList: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Label */}
      <Section label="Riwayat Transaksi" />

      {/* List */}
      <View style={styles.list}>
        <HistoryListing />
        <HistoryListing />
        <HistoryListing />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 46,
  },
  list: {
    gap: 16,
  },
});
