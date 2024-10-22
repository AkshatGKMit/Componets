import globalStyles from '@styles/global';
import { View, DeviceEventEmitter, Keyboard, TouchableWithoutFeedback } from 'react-native';

const ScreenView = ({ firingEvent, children, style }: ScreenViewProps) => {
  const emitEvent = () => {
    if (firingEvent)
      firingEvent.forEach((ev: EventType) => {
        DeviceEventEmitter.emit(ev);
      });

    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={emitEvent}>
      <View style={[globalStyles().screen, style]}>{children}</View>
    </TouchableWithoutFeedback>
  );
};

export default ScreenView;
