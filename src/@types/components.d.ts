import { ReactNode } from 'react';
import { GestureResponderEvent, StyleProp, TextStyle, ViewStyle } from 'react-native';

declare global {
  type IconBtnProps = {
    icon: IconProps;
    onPress: (ev?: GestureResponderEvent) => void;
    style?: StyleProp<ViewStyle>;
    iconStyle?: StyleProp<TextStyle>;
    onPressIn?: (ev?: GestureResponderEvent) => void;
    onPressOut?: (ev?: GestureResponderEvent) => void;
  };

  type ScreenViewProps = {
    firingEvent?: EventType[];
    children?: React.ReactNode;
    style?: StyleProp<ViewStyle>;
  };

  type BasicType = string | number | boolean;

  type DropDownItem = {
    id: string | number;
    label: string;
    value: BasicType;
    startNode?: ReactNode;
    endNode?: ReactNode;
  };

  type DropdownItems = DropDownItem[];

  type DropdownProps = {
    data: DropDownItems;
    placeholder: string;
    onSelectIndex?: (index: number, value?: BasicType) => void;
    value?: DropDownItem;
    shouldScroll?: boolean;
    style?: StyleProp<ViewStyle>;
    dropdownStyle?: StyleProp<ViewStyle>;
  };
}

export {};
