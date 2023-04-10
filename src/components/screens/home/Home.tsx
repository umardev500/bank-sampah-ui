import {
  ActivityList,
  BalanceCard,
  Heading,
  HistoryList,
  MenuList,
} from 'components/organisms';
import {colors} from 'constants/colors';
import React from 'react';
import {ScrollView, StatusBar, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export const Home: React.FC = () => {
  return (
    <ScrollView>
      <StatusBar backgroundColor={'transparent'} barStyle={'dark-content'} />
      <View style={styles.container}>
        <SafeAreaView>
          <Heading />
          <BalanceCard />
          <MenuList />
          <HistoryList />
          <ActivityList />
        </SafeAreaView>
      </View>
    </ScrollView>
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
