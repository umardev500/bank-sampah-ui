import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {MainNavigation} from '../mainNavigation';
import {Balance} from 'components/screens';

const Stack = createStackNavigator();

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
