import { defaultThemeContextValues } from '@src/constants/context';
import ThemeColors from '@src/themes/themes';
import { createContext, useEffect, useState } from 'react';
import { useColorScheme } from 'react-native';

const ThemeContext = createContext<ThemeCtxProps>(defaultThemeContextValues);

export const ThemeContextProvider = ({ children }: CtxProviderProps) => {
  const colorScheme = useColorScheme();

  const { theme: defaultTheme } = defaultThemeContextValues;

  const [theme, setTheme] = useState<ThemeColors>(defaultTheme);

  useEffect(() => {
    // if (colorScheme) setTheme(ThemeColors[colorScheme]);
  }, [colorScheme]);

  const changeTheme = (themeMode: ThemeMode) => {
    setTheme(ThemeColors[themeMode]);
  };

  const ctxValues = { theme, changeTheme };

  return <ThemeContext.Provider value={ctxValues}>{children}</ThemeContext.Provider>;
};

export default ThemeContext;
