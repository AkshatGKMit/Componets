import { View, Text } from 'react-native';
import React from 'react';
import { BottomTabHeaderProps } from '@react-navigation/bottom-tabs';
import styles from './styles';

const BottomTabsHeader = ({ layout, navigation, options, route }: BottomTabHeaderProps) => {
  return (
    <View style={[styles().view]}>
      <Text style={styles().heading}>Header</Text>
    </View>
  );
};

export default BottomTabsHeader;
