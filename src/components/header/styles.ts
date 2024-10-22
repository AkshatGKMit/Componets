import ThemeContext from '@contexts/ThemeContext';
import { useContext } from 'react';
import { StyleSheet } from 'react-native';

const styles = () => {
  const { theme } = useContext(ThemeContext);

  return StyleSheet.create({
    view: {
      height: 50,
      width: '100%',
      backgroundColor: theme.tabHeaderBGColor,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
    },
    drawerButton: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'center',
      paddingLeft: 10,
    },
    heading: {
      color: theme.tabHeaderTextColor,
      fontSize: 21,
      fontWeight: '700',
    },
  });
};

export default styles;
