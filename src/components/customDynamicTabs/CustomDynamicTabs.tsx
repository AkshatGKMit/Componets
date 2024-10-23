import { View, Text, Button, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import styles from './styles';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Routes from '@constants/routes';
import Icon from '@components/icon';
import { LIGHT } from '@constants/colors';

const FloatingDynamicTabs = ({ descriptors, insets, navigation, state }: BottomTabBarProps) => {
  const { index, routes } = state;

  const { Albums, Artists, Playlists, Songs } = Routes.DynamicTabs;

  const getTabName = (key: string): keyof typeof Routes.DynamicTabs => {
    if (key === 'songs') return Songs;
    else if (key === 'artists') return Artists;
    else if (key === 'albums') return Albums;
    else return Playlists;
  };

  const setFlex = () => {
    switch (routes.length) {
      case 4:
        return styles.flex4;
      case 5:
        return styles.flex5;
      default:
        return null;
    }
  };

  return (
    <View style={styles.bottomTab}>
      {routes.map(({ name, key }: (typeof routes)[0], idx: number) => {
        console.log(name);

        const icon = (): string => {
          switch (name) {
            case 'Songs':
              return 'music-note';
            case 'Artists':
              return 'person';
            case 'Albums':
              return 'album';
            case 'Playlists':
              return 'playlist-play';
            default:
              return 'my-library-music';
          }
        };

        if (index === idx)
          return (
            <View style={[styles.tab, styles.focusedTab]}>
              <View style={[styles.centerView, setFlex()]}>
                <View style={[styles.floatView]}>
                  <Icon
                    family="MaterialIcons"
                    name={icon()}
                    size={30}
                    color={LIGHT.accent600}
                  />
                </View>
              </View>
            </View>
          );

        return (
          <TouchableOpacity
            activeOpacity={1}
            key={key}
            style={[styles.tab]}
            onPress={() => navigation.navigate(name)}
          >
            <Icon
              family="MaterialIcons"
              name={icon()}
              size={30}
              color={'#000'}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default FloatingDynamicTabs;
