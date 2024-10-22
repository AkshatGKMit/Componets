import { View, Text, Switch } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import globalStyles from '@styles/global';
import ThemeContext from '@contexts/ThemeContext';
import styles from './styles';
import SettingsContext from '@contexts/SettingsContext';

const Settings = () => {
  const { isBottomTab, changeIsBottomTab } = useContext(SettingsContext);
  const { isDark, changeTheme } = useContext(ThemeContext);
  const [themeSwitcher, setThemeSwitcher] = useState(false);

  function onSwitchTheme(val: boolean) {
    changeTheme(isDark ? 'light' : 'dark');
    setThemeSwitcher(val);
  }

  function onSwitchTabType(val: boolean) {
    changeIsBottomTab(val);
  }

  return (
    <View style={[globalStyles().screen, globalStyles().flexColumn, styles.screen]}>
      <View style={styles.tile}>
        <Text>Dark Mode</Text>
        <Switch
          value={themeSwitcher}
          onValueChange={onSwitchTheme}
        />
      </View>

      <View style={styles.tile}>
        <Text>Bottom Tabs</Text>
        <Switch
          value={isBottomTab}
          onValueChange={onSwitchTabType}
        />
      </View>
    </View>
  );
};

export default Settings;
