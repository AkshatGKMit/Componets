import { View, Text } from 'react-native';
import React from 'react';
import globalStyles from '@src/styles/global';

const Profile = () => {
  return (
    <View style={[globalStyles.screen, globalStyles.flexColumn]}>
      <Text>Profile</Text>
    </View>
  );
};

export default Profile;
