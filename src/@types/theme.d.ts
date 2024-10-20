declare global {
  type ThemeMode = 'light' | 'dark';

  interface ThemeColors {
    statusBarBGColor: string;
    screenColor: string;
    tabHeaderBGColor: string;
    tabHeaderTextColor: string;
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
