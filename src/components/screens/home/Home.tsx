import {
  BalanceCard,
  Heading,
  HistoryList,
  MenuList,
} from 'components/organisms';
import {colors} from 'constants/colors';
import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';

export const Home: React.FC = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Heading />
        <BalanceCard />
        <MenuList />
        <HistoryList />
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
  },
});
