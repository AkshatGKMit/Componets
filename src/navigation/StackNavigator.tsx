import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Page1, Page2, Page3 } from '@src/screens/page/Page';

const Stack = createNativeStackNavigator<StackParamList>();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Page1"
        component={Page1}
      />
      <Stack.Screen
        name="Page2"
        component={Page2}
      />
      <Stack.Screen
        name="Page3"
        component={Page3}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
