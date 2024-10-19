import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from '@components/icon';
import Home from '@screens/home/Home';
import Profile from '@screens/profile/Profile';
import React, { useEffect, useState } from 'react';
import { useColorScheme } from 'react-native';
import Theme from '@src/themes/themes';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

const Navigator = (): React.JSX.Element => {
  const colorScheme = useColorScheme();
  const [theme, setTheme] = useState(Theme['light']);

  useEffect(() => {
    if (colorScheme) setTheme(Theme[colorScheme]);
  }, [colorScheme]);

  return (
    <BottomTab.Navigator screenOptions={{ tabBarHideOnKeyboard: true, freezeOnBlur: true, tabBarShowLabel: false }}>
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <Icon
              family="FontAwesome"
              name="home"
              color={focused ? theme.tabBarFocusedColor : theme.tabBarUnfocusedColor}
              size={size}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <Icon
              family="Fontisto"
              name="person"
              color={focused ? theme.tabBarFocusedColor : theme.tabBarUnfocusedColor}
              size={size}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default Navigator;
