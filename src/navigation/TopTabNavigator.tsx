import Icon from '@components/icon';
import Advance from '@screens/advance/Advance';
import { useContext } from 'react';
import ThemeContext from '@contexts/ThemeContext';
import Basic from '@screens/basic/Basic';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const TopTab = createMaterialTopTabNavigator<TabParamList>();

const TopTabNavigator = (): React.JSX.Element => {
  const { theme } = useContext(ThemeContext);

  return (
    <TopTab.Navigator>
      <TopTab.Screen
        name="Basic"
        component={Basic}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              family="FontAwesome"
              name="home"
              color={focused ? theme.tabBarFocusedColor : theme.tabBarUnfocusedColor}
              size={25}
            />
          ),
        }}
      />
      <TopTab.Screen
        name="Advance"
        component={Advance}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              family="Fontisto"
              name="person"
              color={focused ? theme.tabBarFocusedColor : theme.tabBarUnfocusedColor}
              size={25}
            />
          ),
        }}
      />
    </TopTab.Navigator>
  );
};

export default TopTabNavigator;
