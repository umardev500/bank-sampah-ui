import React from 'react';
import { SettingList } from '../settingList/SettingList';
import { SettingListing } from 'components/molecules';
import { StyleSheet } from 'react-native';

export const SettingListChat: React.FC = () => {
  return (
    <SettingList containerStyle={styles.container} label="Dompet & Peyimpanan">
      <>
        <SettingListing
          title="Aktifkan Chat"
          subTitle="Tekoneksi dengan pengguna lainnya"
          hasSwitch
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
