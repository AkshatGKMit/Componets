import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
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

const DynamicTab = createBottomTabNavigator<RootDynamicTabScreenParamList>();

const DynamicTabNavigator = (): React.JSX.Element => {
  const { theme } = useContext(ThemeContext);

  const {
    globalSearch: { data },
  } = useContext(DynamicTabContext);

  return (
    <DynamicTab.Navigator>
      {Object.keys(data)
        .filter(key => data[key].results.length > 0)
        .map((key, index) => {
          const tab = data[key];
          return (
            <DynamicTab.Screen
              key={index}
              name={key}
              children={() => <DynamicTabScreen data={tab.results} />}
              options={{
                tabBarShowLabel: false,
                tabBarIcon: ({ focused, color }) => {
                  const icon = (): string => {
                    switch (key) {
                      case 'songs':
                        return 'music-note';
                      case 'artists':
                        return 'person';
                      case 'albums':
                        return 'album';
                      case 'playlists':
                        return 'playlist-music';
                      default:
                        return 'check-box-outline-blank';
                    }
                  };
                  return (
                    <Icon
                      family="MaterialIcons"
                      name={icon()}
                      size={30}
                      color={focused ? color : '#000'}
                    />
                  );
                },
              }}
            />
          );
        })}
    </DynamicTab.Navigator>
  );
};

export default DynamicTabNavigator;
