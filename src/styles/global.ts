import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
  screen: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
  flexRow: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  flexColumn: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
});

export default globalStyles;
