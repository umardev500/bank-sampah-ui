import {NavigationContainer} from '@react-navigation/native';
import {RootNavigation} from 'components/organisms';
import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {StyleSheet} from 'react-native';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';

function App(): JSX.Element {
  return (
    <GestureHandlerRootView style={styles.container}>
      <BottomSheetModalProvider>
        <NavigationContainer>
          <RootNavigation />
        </NavigationContainer>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
