import Routes from '@constants/routes';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Advance from '@screens/advance/Advance';
import Pagination from '@screens/pagination/Pagination';
import DynamicTabNavigator from './DynamicTabNavigator';
import { DynamicTabContextProvider } from '@contexts/DynamicTabContext';
import FormHandling from '@screens/formHandling/FormHandling';

const Stack = createNativeStackNavigator<RootAdvanceStackScreenParamList>();

const AdvanceStackNavigator = () => {
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
