import {createStackNavigator} from '@react-navigation/stack';
import {Bank, PaymentMethod} from 'components/screens';
import React from 'react';
import {StatusBar} from 'react-native';
import {RootStack} from 'types/rootStack';
import {MainNavigation} from '../mainNavigation';

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
        initialRouteName="bankList"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="main" component={MainNavigation} />
        <Stack.Screen name="paymentMethod" component={PaymentMethod} />
        <Stack.Screen name="bankList" component={Bank} />
      </Stack.Navigator>
    </>
  );
};
