import {createStackNavigator} from '@react-navigation/stack';
import {Balance, Bank} from 'components/screens';
import React from 'react';
import {RootStack} from 'types/rootStack';
import {MainNavigation} from '../mainNavigation';
import {StatusBar} from 'react-native';

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
        <Stack.Screen name="balanceTopUp" component={Balance} />
        <Stack.Screen name="bankList" component={Bank} />
      </Stack.Navigator>
    </>
  );
};
