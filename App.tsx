import React, { useContext } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import Navigator from '@navigation/Navigator';
import { NavigationContainer, useTheme } from '@react-navigation/native';
import globalStyles from '@styles/global';
import ThemeContext, { ThemeContextProvider } from '@contexts/ThemeContext';
import { SettingsContextProvider } from '@contexts/SettingsContext';

const App = (): React.JSX.Element => {
  return (
    <SettingsContextProvider>
      <ThemeContextProvider>
        <Main />
      </ThemeContextProvider>
    </SettingsContextProvider>
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
