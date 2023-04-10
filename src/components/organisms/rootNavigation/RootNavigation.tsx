import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {MainNavigation} from '../mainNavigation';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';

const Stack = createStackNavigator();

export const RootNavigation: React.FC = () => {
  return (
    <>
      <BottomSheetModalProvider>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="main" component={MainNavigation} />
        </Stack.Navigator>
      </BottomSheetModalProvider>
    </>
  );
};
