import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Listing } from 'components/molecules';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { RootStack } from 'types/rootStack';

type NavigationProps = StackNavigationProp<RootStack, 'bankList'>;

export const BankList: React.FC = () => {
  const navigation = useNavigation<NavigationProps>();
  const toValueScreen = (vendor: string) => {
    navigation.navigate('topUpValue', { vendor: `${vendor} Virtual Account` });
  };

  return (
    <View style={styles.container}>
      <Listing
        icon={require('assets/logos/permata-2.png')}
        title="Permata Virtual Account"
        onPress={() => toValueScreen('Permata')}
      />
      <Listing
        icon={require('assets/logos/bni.png')}
        title="BNI Virtual Account"
        onPress={() => toValueScreen('BNI')}
      />
      <Listing
        icon={require('assets/logos/briva.png')}
        title="BRI Virtual Account"
        onPress={() => toValueScreen('BRI')}
      />
      <Listing
        icon={require('assets/logos/bca.png')}
        title="BCA Virtual Account"
        onPress={() => toValueScreen('BCA')}
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
