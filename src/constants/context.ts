import ThemeColors from '@src/themes/themes';

export const defaultThemeContextValues: ThemeCtxProps = {
  theme: ThemeColors.dark,
  changeTheme: () => {},
  isDark: true,
};
