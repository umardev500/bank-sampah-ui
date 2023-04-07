import {
  BalanceCard,
  Heading,
  HistoryList,
  MenuList,
} from 'components/organisms';
import {colors} from 'constants/colors';
import React from 'react';
import {StyleSheet, View} from 'react-native';

export const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <Heading />
      <BalanceCard />
      <MenuList />
      <HistoryList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingLeft: 16,
    paddingRight: 16,
  },
});
