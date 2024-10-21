import { ReactNode } from 'react';

declare global {
  interface CtxProviderProps {
    children?: ReactNode;
  }

  interface ThemeCtxProps {
    theme: ThemeColors;
    isDark: boolean;
    changeTheme: (themeMode: ThemeMode) => void;
  }

  interface SettingsCtxProps {
    isBottomTab: boolean;
    changeIsBottomTab: (value: boolean) => void;
  }
}

export {};
