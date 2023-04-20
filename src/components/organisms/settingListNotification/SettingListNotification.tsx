import React from 'react';
import { SettingList } from '../settingList/SettingList';
import { SettingListing } from 'components/molecules';
import { StyleSheet } from 'react-native';

export const SettingListNotification: React.FC = () => {
  return (
    <SettingList containerStyle={styles.container} label="Dompet & Peyimpanan">
      <>
        <SettingListing title="Aktifkan Notifikasi" hasSwitch />
        <SettingListing title="Tes Notifikasi" />
        <SettingListing
          title="Hapus Semua Notifikasi"
          subTitle="Semua notifikasi terhapus permanen"
        />
      </>
    </SettingList>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
  },
});
