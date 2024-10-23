import Routes from '@constants/routes';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Advance from '@screens/advance/Advance';
import Pagination from '@screens/pagination/Pagination';
import DynamicTabNavigator from './DynamicTabNavigator';
import { DynamicTabContextProvider } from '@contexts/DynamicTabContext';
import FormHandling from '@screens/formHandling/FormHandling';
import { useNavigation, useRoute, RouteProp, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { useLayoutEffect } from 'react';

const Stack = createNativeStackNavigator<RootAdvanceStackScreenParamList>();

const AdvanceStackNavigator = () => {
  const navigation = useNavigation<TabNavigation>();
  const route = useRoute<RouteProp<RootTabParamList>>();

  useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    console.log(routeName);

    navigation.setOptions({
      tabBarStyle: { display: routeName === 'MainDynamicTabs' ? 'none' : 'flex' },
    });
  }, [navigation, route]);
  return (
    <DynamicTabContextProvider>
      <Stack.Navigator>
        <Stack.Screen
          name={Routes.AdvanceStack.Advance}
          component={Advance}
        />
        <Stack.Screen
          name={Routes.AdvanceStack.MainDynamicTabs}
          component={DynamicTabNavigator}
        />
        <Stack.Screen
          name={Routes.AdvanceStack.Pagination}
          component={Pagination}
        />
        <Stack.Screen
          name={Routes.AdvanceStack.FormHandling}
          component={FormHandling}
        />
      </Stack.Navigator>
    </DynamicTabContextProvider>
  );
};

export default AdvanceStackNavigator;
