import {HistoryListing} from 'components/molecules';
import {colors} from 'constants/colors';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

export const HistoryList: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Label */}
      <View style={styles.label}>
        <Text style={styles.labelText}>Riwayat Transaksi</Text>
        <Image
          style={styles.arrow}
          source={require('assets/icons/arrow-right.png')}
        />
      </View>

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
  label: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  labelText: {
    fontSize: 18,
    color: colors.gray.gray600,
    fontWeight: '500',
  },
  arrow: {},
});
