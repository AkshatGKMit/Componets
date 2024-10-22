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
}

export {};
