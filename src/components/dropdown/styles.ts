import COLORS, { DARK } from '@constants/colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
  },
  placeholder: {
    color: '#00000045',
  },
  focusDd: {
    borderColor: DARK.accent700,
  },
  dropdown: {
    height: 50,
    paddingHorizontal: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  ddValue: {
    fontSize: 14,
    color: COLORS.black.shade950,
  },
  dropdownList: {
    top: 55,
    paddingHorizontal: 10,
    elevation: 2,
    borderWidth: 0.1,
    position: 'absolute',
    zIndex: 4,
    backgroundColor: COLORS.white.shade50,
    gap: 10,
  },
  data: {
    backgroundColor: COLORS.white.shade50,
    padding: 6,
    width: '100%',
    paddingRight: 25,
  },
  dataText: {
    color: COLORS.black.shade950,
    fontSize: 16,
  },
});

export default styles;
