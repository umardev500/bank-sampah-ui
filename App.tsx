import {NavigationContainer} from '@react-navigation/native';
import {MainNavigation} from 'components/organisms';
import React from 'react';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
}

export default App;
