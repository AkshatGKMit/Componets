import ThemeContext from '@src/contexts/ThemeContext';
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
    },
    heading: {
      color: theme.tabHeaderTextColor,
    },
  });
};

export default styles;
