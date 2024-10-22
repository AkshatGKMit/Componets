import ThemeColors from '@themes/themes';

export const defaultThemeContextValues: ThemeCtxProps = {
  theme: ThemeColors.dark,
  changeTheme: () => {},
  isDark: true,
};

export const defaultDynamicTabContextValues: DynamicTabCtxProps = {
  globalSearch: {
    success: false,
    data: {
      albums: { results: [] },
      artists: { results: [] },
      playlists: { results: [] },
      songs: { results: [] },
    },
  },
  search: () => {},
  falseSuccess: () => {},
};
