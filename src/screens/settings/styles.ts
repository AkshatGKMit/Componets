import COLORS from '@constants/colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  screen: {
    gap: 10,
  },
  tile: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.white.shade50,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
});

export default styles;
