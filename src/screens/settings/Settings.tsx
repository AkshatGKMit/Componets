import { View, Text } from 'react-native';
import React from 'react';
import globalStyles from '@src/styles/global';

const Settings = () => {
  return (
    <View style={[globalStyles().screen, globalStyles().flexColumn]}>
      <Text>Settings</Text>
    </View>
  );
};

export default Settings;
