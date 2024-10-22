import { Animated, StyleSheet, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabNavigator from './BottomTabNavigator';
import Settings from '@screens/settings/Settings';
import COLORS from '@constants/colors';
import { useContext } from 'react';
import SettingsContext from '@contexts/SettingsContext';
import TopTabNavigator from './TopTabNavigator';
import StackNavigator from './StackNavigator';

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
      <Drawer.Screen
        name="StackScreens"
        component={StackNavigator}
      />
    </Drawer.Navigator>
  );
};

export default Navigator;
