import React from 'react';
import { SettingList } from '../settingList/SettingList';
import { SettingListing } from 'components/molecules';
import { StyleSheet } from 'react-native';
import { useSharedValue } from 'react-native-reanimated';

export const SettingListNotification: React.FC = () => {
  const notifiactionStatus = useSharedValue(false);
  const setNotificationHandler = () => {
    'worklet';
    notifiactionStatus.value = !notifiactionStatus.value;
  };

  return (
    <SettingList containerStyle={styles.container} label="Notifikasi">
      <>
        <SettingListing
          title="Aktifkan Notifikasi"
          hasSwitch
          disabledSwitchTouch
          switchStatus={notifiactionStatus}
          onPress={setNotificationHandler}
        />
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
