import {createStackNavigator} from '@react-navigation/stack';
import {Balance} from 'components/screens';
import React from 'react';
import {RootStack} from 'types/rootStack';
import {MainNavigation} from '../mainNavigation';

const Stack = createStackNavigator<RootStack>();

export const RootNavigation: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="main" component={MainNavigation} />
      <Stack.Screen name="balanceTopUp" component={Balance} />
    </Stack.Navigator>
  );
};
