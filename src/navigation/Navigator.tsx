import { Animated, StyleSheet, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabNavigator from './BottomTabNavigator';
import Settings from '@src/screens/settings/Settings';
import COLORS from '@src/constants/colors';
import { useContext } from 'react';
import SettingsContext from '@src/contexts/SettingsContext';
import TopTabNavigator from './TopTabNavigator';

const Drawer = createDrawerNavigator<DrawerParamList>();

const Navigator = (): React.JSX.Element => {
  const { isBottomTab } = useContext(SettingsContext);

  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="MainTab"
        component={isBottomTab ? BottomTabNavigator : TopTabNavigator}
        options={{
          headerShown: false,
          drawerLabel: ({ focused, color }) => <Text style={{ color: focused ? color : COLORS.black.shade950 }}>Main</Text>,
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={Settings}
      />
    </Drawer.Navigator>
  );
};

export default Navigator;
