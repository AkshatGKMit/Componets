import Routes from '@constants/routes';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Page1, Page2, Page3 } from '@screens/page/Page';

const Stack = createNativeStackNavigator<RootPageStackScreenParamList>();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Routes.PageStack.Page1}
        component={Page1}
      />
      <Stack.Screen
        name={Routes.PageStack.Page2}
        component={Page2}
      />
      <Stack.Screen
        name={Routes.PageStack.Page3}
        component={Page3}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
