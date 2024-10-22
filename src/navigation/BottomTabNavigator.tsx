import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from '@components/icon';
import Advance from '@screens/advance/Advance';
import { useContext } from 'react';
import ThemeContext from '@contexts/ThemeContext';
import BottomTabsHeader from '@components/header';
import Basic from '@screens/basic/Basic';

const BottomTab = createBottomTabNavigator<TabParamList>();

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
        name="Basic"
        component={Basic}
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
        name="Advance"
        component={Advance}
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
