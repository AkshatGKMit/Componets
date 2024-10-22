import { View, Text } from 'react-native';
import React from 'react';
import globalStyles from '@styles/global';

const Advance = () => {
  return (
    <View style={[globalStyles().screen, globalStyles().flexColumn]}>
      <Text>Advance</Text>
    </View>
  );
};

export default Advance;
