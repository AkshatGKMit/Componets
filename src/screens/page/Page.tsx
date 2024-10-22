import { View, Text, Button } from 'react-native';
import React from 'react';
import globalStyles from '@styles/global';
import { useNavigation } from '@react-navigation/native';

export const Page1 = () => {
  const Navigation = useNavigation<Page1ScreenParamList>();

  return (
    <View style={[globalStyles().screen, globalStyles().flexColumn]}>
      <Text>Page1</Text>
      <Button
        title="Go to page 2"
        onPress={() => {
          Navigation.navigate('Page2');
        }}
      />
      <Button
        title="Go to page 3"
        onPress={() => Navigation.navigate('Page3')}
      />
    </View>
  );
};

export const Page2 = () => {
  const Navigation = useNavigation<Page2ScreenParamList>();

  return (
    <View style={[globalStyles().screen, globalStyles().flexColumn]}>
      <Text>Page2</Text>
      <Button
        title="Go back"
        onPress={() => Navigation.goBack()}
      />
      <Button
        title="Go to page 3"
        onPress={() => Navigation.navigate('Page3')}
      />
    </View>
  );
};

export const Page3 = () => {
  const Navigation = useNavigation<Page3ScreenParamList>();

  return (
    <View style={[globalStyles().screen, globalStyles().flexColumn]}>
      <Text>Page3</Text>
      <Button
        title="Go back"
        onPress={() => Navigation.goBack()}
      />
      <Button
        title="Go back to page 1"
        onPress={() => {
          Navigation.goBack();
          Navigation.goBack();
        }}
      />
    </View>
  );
};
