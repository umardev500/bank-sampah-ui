import {NavigationContainer} from '@react-navigation/native';
import {RootNavigation} from 'components/organisms';
import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {StyleSheet} from 'react-native';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <GestureHandlerRootView style={styles.container}>
        <RootNavigation />
      </GestureHandlerRootView>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
