import Routes from '@constants/routes';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Advance from '@screens/advance/Advance';
import Pagination from '@screens/pagination/Pagination';

const Stack = createNativeStackNavigator<RootAdvanceStackScreenParamList>();

const AdvanceStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Routes.AdvanceStack.Advance}
        component={Advance}
      />
      <Stack.Screen
        name={Routes.AdvanceStack.Pagination}
        component={Pagination}
      />
    </Stack.Navigator>
  );
};

export default AdvanceStackNavigator;
