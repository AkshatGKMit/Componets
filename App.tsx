import React from 'react';
import { SafeAreaView, Text, useColorScheme } from 'react-native';
import Navigator from '@navigation/Navigator';
import { NavigationContainer } from '@react-navigation/native';
import globalStyles from '@src/styles/global';
import { ThemeContextProvider } from '@src/contexts/ThemeContext';

const App = (): React.JSX.Element => {
  return (
    <ThemeContextProvider>
      <SafeAreaView style={globalStyles().screen}>
        <NavigationContainer>
          <Navigator />
        </NavigationContainer>
      </SafeAreaView>
    </ThemeContextProvider>
  );
};

export default App;
