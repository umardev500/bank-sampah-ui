import { Section } from 'components/atoms';
import { HistoryListing } from 'components/molecules';
import React from 'react';
import { StyleSheet, View } from 'react-native';

export const HistoryList: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Label */}
      <Section label="Riwayat Transaksi" />

      {/* List */}
      <View style={styles.list}>
        <HistoryListing
          item={{
            photo: require('assets/avatars/avatar-5.png'),
            name: 'Sarah Jhonson',
            price: '5.000',
            status: 'received',
          }}
        />
        <HistoryListing
          item={{
            photo: require('assets/avatars/avatar-4.png'),
            name: 'Mark',
            price: '3.000',
            status: 'sent',
          }}
        />
        <HistoryListing
          item={{
            photo: require('assets/avatars/avatar-3.png'),
            name: 'Shawley Cheese',
            price: '1.000',
            status: 'sent',
          }}
        />
        <HistoryListing
          item={{
            photo: require('assets/avatars/avatar-6.png'),
            name: 'Cellin Dion',
            price: '8.500',
            status: 'received',
          }}
        />
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
