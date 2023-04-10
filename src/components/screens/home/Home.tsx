import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {
  ActivityList,
  BalanceCard,
  Heading,
  HistoryList,
  MenuList,
  TopUpBottomSheet,
} from 'components/organisms';
import {colors} from 'constants/colors';
import React, {useEffect, useRef} from 'react';
import {ScrollView, StatusBar, StyleSheet, View} from 'react-native';

export const Home: React.FC = () => {
  const topUpModalRef = useRef<BottomSheetModal>(null);
  useEffect(() => {
    topUpModalRef.current?.present();
    console.log('effect');
  }, []);

  return (
    <>
      <BottomSheetModalProvider>
        <ScrollView>
          <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
          <View style={styles.container}>
            <Heading />
            <BalanceCard />
            <MenuList />
            <HistoryList />
            <ActivityList />
          </View>
        </ScrollView>
        <TopUpBottomSheet ref={topUpModalRef} />
      </BottomSheetModalProvider>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
  },
});
