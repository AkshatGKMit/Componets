import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from '@components/icon';
import { useContext } from 'react';
import ThemeContext from '@contexts/ThemeContext';
import BottomTabsHeader from '@components/header';
import Basic from '@screens/basic/Basic';
import Routes from '@constants/routes';
import AdvanceStackNavigator from './AdvanceStackNavigator';
import DynamicTabContext from '@contexts/DynamicTabContext';
import DynamicTabScreen from '@screens/dynamicTabScreen/DynamicTabScreen';

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
        .map((key, index) => (
          <DynamicTab.Screen
            key={index}
            name={key}
            children={() => <DynamicTabScreen data={data[key].results} />}
          />
        ))}
    </DynamicTab.Navigator>
  );
};

export default DynamicTabNavigator;
