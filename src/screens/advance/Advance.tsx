import { View, Button, TextInput, Alert } from 'react-native';
import globalStyles from '@styles/global';
import { useNavigation } from '@react-navigation/native';
import Routes from '@constants/routes';
import DynamicTabContext, { DynamicTabContextProvider } from '@contexts/DynamicTabContext';
import { useContext, useState } from 'react';

const Advance = () => {
  const { navigate } = useNavigation<AdvanceStackScreenNavigation>();

  return (
    <View style={[globalStyles().screen, globalStyles().flexColumn]}>
      <Button
        title="Pagination"
        onPress={() => navigate(Routes.AdvanceStack.Pagination)}
      />
      <DynamicTabContextProvider>
        <DynamicTabSection />
      </DynamicTabContextProvider>
    </View>
  );
};

const DynamicTabSection = () => {
  const { navigate } = useNavigation<AdvanceStackScreenNavigation>();

  const { search, falseSuccess, globalSearch } = useContext(DynamicTabContext);

  const [text, setText] = useState('');

  return (
    <View style={[globalStyles().flexRow, { height: 50, width: '100%', gap: 20 }]}>
      <TextInput
        style={{ flex: 1, borderWidth: 0.5, borderColor: 'black', height: '100%' }}
        placeholder="Global Search Dynamic Tabs"
        value={text}
        onChangeText={value => {
          if (value === '') falseSuccess();
          else setText(value);
        }}
      />
      <Button
        title="Go"
        onPress={() => {
          search(text);
          if (globalSearch.success) navigate(Routes.AdvanceStack.MainDynamicTabs);
          else Alert.alert('Failure', 'Error in fetching data', [{ text: 'Ok' }]);
        }}
      />
    </View>
  );
};

export default Advance;
