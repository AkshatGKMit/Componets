import ThemeContext from '@contexts/ThemeContext';
import { useContext } from 'react';
import { StyleSheet } from 'react-native';

const globalStyles = () => {
  const { theme } = useContext(ThemeContext);

  return StyleSheet.create({
    screen: {
      flex: 1,
      padding: 15,
      backgroundColor: theme.screenColor,
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
};

export default globalStyles;
