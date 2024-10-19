import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from '@components/icon';
import Home from '@screens/home/Home';
import Profile from '@screens/profile/Profile';
import React from 'react';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

const Navigator = (): React.JSX.Element => {
  return (
    <BottomTab.Navigator screenOptions={{ tabBarHideOnKeyboard: true, freezeOnBlur: true, tabBarShowLabel: false }}>
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, focused, size }) => (
            <Icon
              family="FontAwesome"
              name="home"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, focused, size }) => (
            <Icon
              family="Fontisto"
              name="person"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default Navigator;
