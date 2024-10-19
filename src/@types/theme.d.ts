declare global {
  type ThemeMode = 'light' | 'dark';

  interface ThemeColors {
    screenColor: string;
    tabBarBGColor: string;
    tabBarFocusedColor: string;
    tabBarUnfocusedColor: string;
  }

  interface Theme {
    light: ThemeColors;
    dark: ThemeColors;
  }
}

export {};
