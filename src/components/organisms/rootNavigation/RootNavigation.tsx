import { createStackNavigator } from '@react-navigation/stack';
import { Bank, PaymentMethod, TopUpInfo, TopUpValue } from 'components/screens';
import React from 'react';
import { StatusBar } from 'react-native';
import { RootStack } from 'types/rootStack';
import { MainNavigation } from '../mainNavigation';
import { colors } from 'constants/colors';

const Stack = createStackNavigator<RootStack>();

export const RootNavigation: React.FC = () => {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
      />
      <Stack.Navigator
        initialRouteName="main"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="main" component={MainNavigation} />
        <Stack.Screen name="paymentMethod" component={PaymentMethod} />
        <Stack.Screen name="bankList" component={Bank} />
        <Stack.Screen name="topUpValue" component={TopUpValue} />
        <Stack.Screen
          options={{
            headerShown: true,
            title: 'Pembayaran',
            headerTitleStyle: {
              color: colors.gray.gray600,
            },
          }}
          name="topUpInfo"
          component={TopUpInfo}
        />
      </Stack.Navigator>
    </>
  );
};
