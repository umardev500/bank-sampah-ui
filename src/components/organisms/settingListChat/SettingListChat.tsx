import React from 'react';
import { SettingList } from '../settingList/SettingList';
import { SettingListing } from 'components/molecules';
import { StyleSheet } from 'react-native';
import { useSharedValue } from 'react-native-reanimated';

export const SettingListChat: React.FC = () => {
  const chatStatus = useSharedValue(false);
  const setChatHandler = () => {
    'worklet';
    chatStatus.value = !chatStatus.value;
  };

  return (
    <SettingList containerStyle={styles.container} label="Chat">
      <>
        <SettingListing
          title="Aktifkan Chat"
          subTitle="Tekoneksi dengan pengguna lainnya"
          hasSwitch
          disabledSwitchTouch
          switchStatus={chatStatus}
          onPress={setChatHandler}
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
