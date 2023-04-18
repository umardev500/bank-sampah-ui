import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Listing } from 'components/molecules';
import React, { useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import { RootStack } from 'types/rootStack';

type NavigationProps = StackNavigationProp<RootStack>;

export const PaymentList: React.FC = () => {
  const navigation = useNavigation<NavigationProps>();
  const toValueScreen = (vendor: string) => {
    navigation.navigate('topUpValue', { vendor: vendor });
  };

  const toBankList = useCallback(() => {
    navigation.navigate('bankList');
  }, []);

  return (
    <View style={styles.container}>
      <Listing
        icon={require('assets/icons/alfamart-logo.png')}
        title="Alfamart"
        onPress={() => toValueScreen('Alfamart')}
      />
      <Listing
        icon={require('assets/icons/indomaret-logo.png')}
        onPress={() => toValueScreen('Indomaret')}
        title="Indomaret"
      />
      <Listing
        icon={require('assets/icons/salary.png')}
        title="Bank Transfer"
        onPress={toBankList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 16,
    paddingRight: 16,
  },
});
