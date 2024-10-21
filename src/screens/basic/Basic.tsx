import { View, DeviceEventEmitter, TouchableWithoutFeedback } from 'react-native';
import globalStyles from '@src/styles/global';
import Dropdown from '@src/components/dropdown';

const Basic = () => {
  const handlePress = () => {
    DeviceEventEmitter.emit('touch');
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={[globalStyles().screen, globalStyles().flexColumn]}>
        <Dropdown />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Basic;
