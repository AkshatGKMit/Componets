import { View, Button } from 'react-native';
import globalStyles from '@styles/global';
import { useNavigation } from '@react-navigation/native';
import Routes from '@constants/routes';

const Advance = () => {
  const { navigate } = useNavigation<AdvanceStackScreenNavigation>();

  return (
    <View style={[globalStyles().screen, globalStyles().flexColumn]}>
      <Button
        title="Pagination"
        onPress={() => navigate(Routes.AdvanceStack.Pagination)}
      />
      <Button
        title="Dynamic Tabs"
        onPress={() => navigate(Routes.AdvanceStack.MainDynamicTabs)}
      />
    </View>
  );
};

export default Advance;
