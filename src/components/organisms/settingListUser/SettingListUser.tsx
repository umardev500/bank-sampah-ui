import React from 'react';
import { SettingList } from '../settingList/SettingList';
import { SettingListing } from 'components/molecules';
import { StyleSheet } from 'react-native';

export const SettingListUser: React.FC = () => {
  return (
    <SettingList containerStyle={styles.container} label="Pengguna">
      <>
        <SettingListing title="Profile" />
        <SettingListing title="Pengaturan Alamat" />
      </>
    </SettingList>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
  },
});
