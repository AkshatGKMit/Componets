import { View, Text, TextInput, Button, TouchableWithoutFeedback, Keyboard } from 'react-native';
import React, { useRef, useState } from 'react';
import globalStyles from '@styles/global';

const FormHandling = () => {
  const input1 = useRef<TextInput>(null);
  const input2 = useRef<TextInput>(null);
  const input3 = useRef<TextInput>(null);
  const buttonRef = useRef<Button>(null);

  const [color, setColor] = useState('red');

  const changeColor = () => {
    setColor(prev => (prev === 'red' ? 'green' : 'red'));
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={[globalStyles().screen, globalStyles().flexColumn, { gap: 30 }]}>
        <View style={[globalStyles().flexRow, { height: 50, width: '100%', gap: 20 }]}>
          <TextInput
            ref={input1}
            style={{ flex: 1, borderWidth: 0.5, borderColor: 'black', height: '100%' }}
            placeholder="Name"
            enterKeyHint="next"
            onSubmitEditing={() => input2.current?.focus()}
          />
        </View>
        <View style={[globalStyles().flexRow, { height: 50, width: '100%', gap: 20 }]}>
          <TextInput
            ref={input2}
            style={{ flex: 1, borderWidth: 0.5, borderColor: 'black', height: '100%' }}
            placeholder="Age"
            keyboardType="numeric"
            enterKeyHint="next"
            onSubmitEditing={() => input3.current?.focus()}
          />
        </View>

        <View style={[globalStyles().flexRow, { height: 50, width: '100%', gap: 20 }]}>
          <TextInput
            ref={input3}
            style={{ flex: 1, borderWidth: 0.5, borderColor: 'black', height: '100%' }}
            placeholder="Password"
            secureTextEntry
            enterKeyHint="done"
            onSubmitEditing={changeColor}
          />
        </View>
        <Button
          ref={buttonRef}
          title="Submit"
          onPress={changeColor}
          color={color}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default FormHandling;
