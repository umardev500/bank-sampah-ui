import React from 'react';
import { SettingList } from '../settingList/SettingList';
import { SettingListing } from 'components/molecules';
import { StyleSheet } from 'react-native';

export const SettingListWallet: React.FC = () => {
  return (
    <SettingList containerStyle={styles.container} label="Dompet & Peyimpanan">
      <>
        <SettingListing
          title="Tampilkan Nomor"
          subTitle="Nomor pengguna tampil di card"
          hasSwitch
        />
        <SettingListing
          title="Tampilkan Saldo"
          subTitle="Nominal saldo akan ditampilkan di card"
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
