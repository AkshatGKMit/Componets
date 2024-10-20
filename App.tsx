import React, { useContext } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import Navigator from '@navigation/Navigator';
import { NavigationContainer, useTheme } from '@react-navigation/native';
import globalStyles from '@src/styles/global';
import ThemeContext, { ThemeContextProvider } from '@src/contexts/ThemeContext';

const App = (): React.JSX.Element => {
  return (
    <ThemeContextProvider>
      <Main />
    </ThemeContextProvider>
  );
};

const Main = () => {
  const { isDark } = useContext(ThemeContext);

  return (
    <>
      <StatusBar
        backgroundColor={'#000'}
        barStyle={isDark ? 'light-content' : 'dark-content'}
        animated
      />
      <SafeAreaView style={globalStyles().screen}>
        <NavigationContainer>
          <Navigator />
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
};

export default App;
