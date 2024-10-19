import React from 'react';
import { SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const App = (): React.JSX.Element => (
  <SafeAreaView>
    <Icon
      name="rocket"
      size={30}
      color="#900"
    />
  </SafeAreaView>
);

export default App;
