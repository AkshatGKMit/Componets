import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from '@components/icon';
import Home from '@screens/home/Home';
import Profile from '@screens/profile/Profile';
import { useContext } from 'react';
import ThemeContext from '@src/contexts/ThemeContext';
import BottomTabsHeader from '@src/components/header';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabNavigator = (): React.JSX.Element => {
  const { theme } = useContext(ThemeContext);

  return (
    <BottomTab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        freezeOnBlur: true,
        tabBarShowLabel: false,
        tabBarInactiveBackgroundColor: theme.tabBarBGColor,
        tabBarActiveBackgroundColor: theme.tabBarBGColor,
        header: headerProps => <BottomTabsHeader {...headerProps} />,
      }}
    >
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

export default BottomTabNavigator;
