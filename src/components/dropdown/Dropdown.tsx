import { View, Text, TouchableOpacity, ScrollView, DeviceEventEmitter, TouchableWithoutFeedback } from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './styles';
import Icon from '../icon';
import COLORS, { DARK } from '@constants/colors';

const Dropdown = ({ data, value, onSelectIndex, placeholder, shouldScroll, dropdownStyle, style }: DropdownProps) => {
  const [isFocus, setIsFocus] = useState(false);

  useEffect(() => {
    const touchEvent = DeviceEventEmitter.addListener('touch', () => {
      setIsFocus(false);
    });

    return () => {
      touchEvent.remove();
    };
  }, []);

  const handleSelect = (index: number, value: BasicType) => {
    setIsFocus(false);
    onSelectIndex?.(index, value);
  };

  return (
    <View>
      <TouchableWithoutFeedback
        style={style}
        onPress={() => setIsFocus(!isFocus)}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
      >
        <View style={[styles.dropdown, isFocus ? styles.focusDd : undefined]}>
          <Text style={[styles.ddValue, !value ? styles.placeholder : null]}>{value ? value.label : placeholder}</Text>
          <Icon
            family="Entypo"
            color={isFocus ? DARK.accent700 : COLORS.black.shade950}
            name="chevron-small-down"
            size={20}
          />
        </View>
      </TouchableWithoutFeedback>
      {isFocus ? (
        <ScrollView
          style={[styles.dropdownList, dropdownStyle]}
          scrollEnabled={shouldScroll ?? false}
          showsVerticalScrollIndicator={false}
        >
          {data.map(({ id, label, value, endNode, startNode }: DropDownItem, index: number) => (
            <TouchableOpacity
              key={id}
              style={styles.data}
              onPress={() => handleSelect(index, value)}
            >
              {startNode}
              <Text style={styles.dataText}>{label}</Text>
              {endNode}
            </TouchableOpacity>
          ))}
        </ScrollView>
      ) : undefined}
    </View>
  );
};

export default Dropdown;
