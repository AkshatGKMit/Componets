import { View, Text, Switch } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import globalStyles from '@src/styles/global';
import ThemeContext from '@src/contexts/ThemeContext';

const Settings = () => {
  const { isDark, changeTheme } = useContext(ThemeContext);
  const [themeSwitcher, setThemeSwitcher] = useState(false);

  useEffect(() => {
    setThemeSwitcher(isDark);
  }, [isDark]);

  function onSwitchTheme(val: boolean) {
    changeTheme(isDark ? 'light' : 'dark');
  }

  return (
    <View style={[globalStyles().screen, globalStyles().flexColumn]}>
      <Switch
        value={themeSwitcher}
        onValueChange={onSwitchTheme}
      />
    </View>
  );
};

export default Settings;
