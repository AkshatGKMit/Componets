import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from '@components/icon';
import Home from '@screens/home/Home';
import Profile from '@screens/profile/Profile';
import { useContext } from 'react';
import ThemeContext from '@src/contexts/ThemeContext';
import { Animated, StyleSheet } from 'react-native';
import BottomTabsHeader from '@src/components/header';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabNavigator from './BottomTabNavigator';
import Settings from '@src/screens/settings/Settings';

const Drawer = createDrawerNavigator<DrawerParamList>();

const Navigator = (): React.JSX.Element => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="MainTab"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Settings"
        component={Settings}
      />
    </Drawer.Navigator>
  );
};

export default Navigator;
