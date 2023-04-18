import { createStackNavigator } from '@react-navigation/stack';
import {
  Bank,
  PaymentMethod,
  TopUpInfo,
  TopUpValue,
  Transfer,
  TransferInfo,
  TransferValue,
} from 'components/screens';
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
          headerShown: true,
          title: 'Pembayaran',
          headerTitleStyle: {
            color: colors.gray.gray600,
          },
        }}>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="main"
          component={MainNavigation}
        />
        <Stack.Screen
          options={{
            title: 'Metode Pembayaran',
          }}
          name="paymentMethod"
          component={PaymentMethod}
        />
        <Stack.Screen
          options={{
            title: 'Pilih Bank Tujuan',
          }}
          name="bankList"
          component={Bank}
        />
        <Stack.Screen
          options={{
            title: 'Jumlah Pembayaran',
          }}
          name="topUpValue"
          component={TopUpValue}
        />
        <Stack.Screen
          options={{
            title: 'Pembayaran',
          }}
          name="topUpInfo"
          component={TopUpInfo}
        />
        <Stack.Screen
          options={{
            title: 'Transfer',
          }}
          name="transfer"
          component={Transfer}
        />
        <Stack.Screen
          options={{
            title: 'Transfer',
          }}
          name="transferValue"
          component={TransferValue}
        />
        <Stack.Screen
          options={{
            title: 'Informasi Transfer',
          }}
          name="transferInfo"
          component={TransferInfo}
        />
      </Stack.Navigator>
    </>
  );
};
