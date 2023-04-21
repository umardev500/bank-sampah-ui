import { SettingListing } from 'components/molecules';
import React from 'react';
import { StyleSheet } from 'react-native';
import { useSharedValue } from 'react-native-reanimated';
import { SettingList } from '../settingList/SettingList';

export const SettingListWallet: React.FC = () => {
  const numberShowingStatus = useSharedValue(false);
  const balanceShowingStatus = useSharedValue(false);

  // showing number card handler
  const showingCardNumberHandler = () => {
    'worklet';
    numberShowingStatus.value = !numberShowingStatus.value;
  };

  // showing balance handler
  const showingBalanceHandler = () => {
    'worklet';
    balanceShowingStatus.value = !balanceShowingStatus.value;
  };

  return (
    <SettingList containerStyle={styles.container} label="Dompet & Peyimpanan">
      <SettingListing
        title="Tampilkan Nomor"
        subTitle="Nomor pengguna tampil di card"
        hasSwitch
        switchStatus={numberShowingStatus}
        onPress={showingCardNumberHandler}
        disabledSwitchTouch
      />
      <SettingListing
        title="Tampilkan Saldo"
        subTitle="Nominal saldo akan ditampilkan di card"
        hasSwitch
        switchStatus={balanceShowingStatus}
        onPress={showingBalanceHandler}
        disabledSwitchTouch
      />
    </SettingList>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
  },
});
