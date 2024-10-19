import React from 'react';
import { SafeAreaView } from 'react-native';
import Navigator from '@navigation/Navigator';
import { NavigationContainer } from '@react-navigation/native';
import globalStyles from '@src/styles/global';

const App = (): React.JSX.Element => (
  <SafeAreaView style={globalStyles.screen}>
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  </SafeAreaView>
);

export default App;
