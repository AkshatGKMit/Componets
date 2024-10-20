import React, { useContext } from 'react';
import { SafeAreaView, StatusBar, Text, useColorScheme } from 'react-native';
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
  const { theme, isDark } = useContext(ThemeContext);

  return (
    <SafeAreaView style={globalStyles().screen}>
      <StatusBar
        backgroundColor={theme.statusBarBGColor}
        barStyle={isDark ? 'dark-content' : 'light-content'}
        translucent
        animated
      />
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
