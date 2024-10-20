import React from 'react';
import { Pressable, TouchableOpacity } from 'react-native';
import Icon from '../icon';
import styles from './styles';

const IconButton = ({
  icon: { family, name, color, size },
  onPress,
  style,
  iconStyle,
  onPressIn,
  onPressOut,
}: IconBtnProps) => {
  return (
    <Pressable
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      style={[styles.button, style]}
    >
      <Icon
        family={family}
        name={name}
        color={color}
        size={size}
        style={iconStyle}
      />
    </Pressable>
  );
};

export default IconButton;
