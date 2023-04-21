import React from 'react';
import { SettingList } from '../settingList/SettingList';
import { SettingListing } from 'components/molecules';
import { StyleSheet } from 'react-native';
import { useDerivedValue, useSharedValue } from 'react-native-reanimated';

export const SettingListWallet: React.FC = () => {
  const numberShowingStatus = useSharedValue(false);
  const balanceShowingStatus = useSharedValue(false);

  // watch for card showing number
  useDerivedValue(() => {
    console.log('number: ', numberShowingStatus.value);
  }, []);

  // watch for showing balance
  useDerivedValue(() => {
    console.log('balance: ', balanceShowingStatus.value);
  }, []);

  return (
    <SettingList containerStyle={styles.container} label="Dompet & Peyimpanan">
      <>
        <SettingListing
          title="Tampilkan Nomor"
          subTitle="Nomor pengguna tampil di card"
          hasSwitch
          switchStatus={numberShowingStatus}
        />
        <SettingListing
          title="Tampilkan Saldo"
          subTitle="Nominal saldo akan ditampilkan di card"
          hasSwitch
          switchStatus={balanceShowingStatus}
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
