import { View, Text } from 'react-native';
import React from 'react';
import { BottomTabHeaderProps } from '@react-navigation/bottom-tabs';
import styles from './styles';
import IconButton from '../iconButton';
import { DrawerActions } from '@react-navigation/native';

const BottomTabsHeader = ({ layout, navigation, options, route: { name } }: BottomTabHeaderProps) => {
  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  return (
    <View style={[styles().view]}>
      <View style={styles().drawerButton}>
        <IconButton
          icon={{ family: 'MaterialIcons', name: 'line-weight', size: 24 }}
          onPress={openDrawer}
        />
      </View>
      <Text style={styles().heading}>{name}</Text>
    </View>
  );
};

export default BottomTabsHeader;
