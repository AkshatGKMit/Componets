import { View, Text } from 'react-native';
import React from 'react';
import globalStyles from '@src/styles/global';

const Basic = () => {
  return (
    <View style={[globalStyles().screen, globalStyles().flexColumn]}>
      <Text>Basic</Text>
    </View>
  );
};

export default Basic;
