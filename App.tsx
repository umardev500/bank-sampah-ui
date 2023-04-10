import {NavigationContainer} from '@react-navigation/native';
import {RootNavigation} from 'components/organisms';
import React from 'react';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>
  );
}

export default App;
