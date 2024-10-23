import { BottomTabBarProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from '@components/icon';
import { useContext, useLayoutEffect } from 'react';
import ThemeContext from '@contexts/ThemeContext';
import BottomTabsHeader from '@components/header';
import Basic from '@screens/basic/Basic';
import Routes from '@constants/routes';
import AdvanceStackNavigator from './AdvanceStackNavigator';
import DynamicTabContext from '@contexts/DynamicTabContext';
import DynamicTabScreen from '@screens/dynamicTabScreen/DynamicTabScreen';
import { useNavigation, useRoute, RouteProp, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import FloatingDynamicTabs from '@components/customDynamicTabs';

const DynamicTab = createBottomTabNavigator<RootDynamicTabScreenParamList>();

const DynamicTabNavigator = (): React.JSX.Element => {
  const { theme } = useContext(ThemeContext);

  const {
    globalSearch: { data },
  } = useContext(DynamicTabContext);

  const { Albums, Artists, Playlists, Songs, TopQuery } = Routes.DynamicTabs;

  const getTabName = (key: string): keyof typeof Routes.DynamicTabs => {
    if (key === 'songs') return Songs;
    else if (key === 'artists') return Artists;
    else if (key === 'albums') return Albums;
    else if (key === 'topQuery') return TopQuery;
    else return Playlists;
  };

  return (
    <DynamicTab.Navigator tabBar={(props: BottomTabBarProps) => <FloatingDynamicTabs {...props} />}>
      {Object.keys(data)
        .filter(key => data[key].results.length > 0)
        .map((key, index) => {
          const tab = data[key];
          return (
            <DynamicTab.Screen
              key={index}
              name={getTabName(key)}
              children={() => <DynamicTabScreen data={tab.results} />}
              options={{
                tabBarShowLabel: false,
              }}
            />
          );
        })}
    </DynamicTab.Navigator>
  );
};

export default DynamicTabNavigator;
