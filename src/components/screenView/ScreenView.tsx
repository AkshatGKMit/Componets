import globalStyles from '@src/styles/global';
import { View, TouchableNativeFeedback, ScrollView, DeviceEventEmitter, Keyboard } from 'react-native';

const ScreenView = ({ firingEvent, children, style }: ScreenViewProps) => {
  const emitEvent = () => {
    if (firingEvent)
      firingEvent.forEach((ev: EventType) => {
        DeviceEventEmitter.emit(ev);
      });

    Keyboard.dismiss();
  };

  return (
    <TouchableNativeFeedback onPress={emitEvent}>
      <View style={[globalStyles().screen, style]}>{children}</View>
    </TouchableNativeFeedback>
  );
};

export default ScreenView;
