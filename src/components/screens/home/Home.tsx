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

export const Home: React.FC = () => {
  return (
    <ScrollView>
      <StatusBar />
      <View style={styles.container}>
        <Heading />
        <BalanceCard />
        <MenuList />
        <HistoryList />
        <ActivityList />
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
