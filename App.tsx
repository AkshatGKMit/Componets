import React, { useContext, useEffect } from 'react';
import { Linking, SafeAreaView, StatusBar } from 'react-native';
import Navigator from '@navigation/Navigator';
import { LinkingOptions, NavigationContainer, useNavigation, useTheme } from '@react-navigation/native';
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

const linking: LinkingOptions<RootDrawerParamList> = {
  prefixes: ['components://'],
  config: {
    screens: {
      StackScreens: {
        screens: {
          Page1: 'page1',
          Page2: 'page2',
          Page3: 'page3',
        },
      },
    },
  },
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
        <NavigationContainer linking={linking}>
          <Navigator />
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
};

export default App;
