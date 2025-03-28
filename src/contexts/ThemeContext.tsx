import { defaultThemeContextValues } from '@constants/context';
import ThemeColors from '@themes/themes';
import { createContext, useEffect, useState } from 'react';
import { Appearance, useColorScheme } from 'react-native';

const ThemeContext = createContext<ThemeCtxProps>(defaultThemeContextValues);

export const ThemeContextProvider = ({ children }: CtxProviderProps) => {
  const colorScheme = useColorScheme();

  const { theme: defaultTheme, isDark: defaultIsDark } = defaultThemeContextValues;

  const [theme, setTheme] = useState<ThemeColors>(defaultTheme);
  const [isDark, setIsDark] = useState<boolean>(defaultIsDark);

  useEffect(() => {
    if (colorScheme) {
      Appearance.setColorScheme(colorScheme);
      setTheme(ThemeColors[colorScheme]);
      setIsDark(colorScheme === 'dark');
    }
  }, [colorScheme]);

  const changeTheme = (themeMode: ThemeMode) => {
    Appearance.setColorScheme(themeMode);
    setTheme(ThemeColors[themeMode]);
    setIsDark(themeMode === 'dark');
  };

  const ctxValues = { theme, changeTheme, isDark };

  return <ThemeContext.Provider value={ctxValues}>{children}</ThemeContext.Provider>;
};

export default ThemeContext;
