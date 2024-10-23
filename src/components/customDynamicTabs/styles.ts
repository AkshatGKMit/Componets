import COLORS from '@constants/colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  bottomTab: {
    height: 50,
    width: '100%',
    flexDirection: 'row',
    position: 'relative',
  },
  tab: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  focusedTab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  centerView: {
    flex: 0.5,
    height: '100%',
    // backgroundColor: 'blue',
    backgroundColor: COLORS.white.shade150,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomStartRadius: 100,
    borderBottomEndRadius: 100,
    marginBottom: 30,
  },
  floatView: {
    position: 'absolute',
    top: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    padding: 5,
    borderRadius: 30,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
  },
  flex4: {
    flex: 0.6,
  },
  flex5: {
    flex: 0.75,
  },
});

export default styles;
