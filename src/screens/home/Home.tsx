import { View, Text } from 'react-native';
import React from 'react';
import globalStyles from '@src/styles/global';

const Home = () => {
  return (
    <View style={[globalStyles.screen, globalStyles.flexColumn]}>
      <Text>Home</Text>
    </View>
  );
};

export default Home;
