import { View, Text, TouchableOpacity, ScrollView, DeviceEventEmitter } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import styles from './styles';
import Icon from '../icon';
import COLORS, { DARK } from '@src/constants/colors';
import uuid from 'react-native-uuid';
import { Screen } from 'react-native-screens';
import { Gesture, GestureDetector, PanGestureHandler } from 'react-native-gesture-handler';

const data = [
  'Decision Dome',
  'Strategy Sphere',
  'Idea Incubator',
  'Think Tank',
  'Hr Room',
  'Js Room',
  'Admin Room',
  'Escape Room',
];

const Dropdown = () => {
  const [isFocus, setIsFocus] = useState(false);
  const [value, setValue] = useState(data[0]);

  useEffect(() => {
    const touchEvent = DeviceEventEmitter.addListener('touch', () => {
      setIsFocus(false);
    });

    return () => {
      touchEvent.remove();
    };
  }, []);

  const handleSelect = (item: string) => {
    setValue(item);
    setIsFocus(false);
  };

  return (
    <View>
      <TouchableOpacity
        onPress={() => setIsFocus(!isFocus)}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
      >
        <View style={[styles.dropdown, isFocus ? styles.focusDd : undefined]}>
          <Text style={[styles.ddValue, !value ? styles.placeholder : undefined]}>{value}</Text>
          <Icon
            family="Entypo"
            color={isFocus ? DARK.accent700 : COLORS.black.shade950}
            name="chevron-small-down"
            size={20}
          />
        </View>
      </TouchableOpacity>
      {isFocus ? (
        <ScrollView
          style={[styles.dropdownList]}
          showsVerticalScrollIndicator={false}
        >
          {data.map(item => (
            <TouchableOpacity
              key={uuid.v1().toString()}
              style={styles.data}
              onPress={() => handleSelect(item)}
            >
              <Text style={styles.dataText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      ) : undefined}
    </View>
  );
};

export default Dropdown;
