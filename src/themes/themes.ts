import COLORS, { DARK, LIGHT } from '@src/constants/colors';

const Theme: Theme = {
  light: {
    statusBarBGColor: COLORS.white.shade50,
    screenColor: COLORS.white.shade150,
    tabHeaderBGColor: COLORS.white.shade100,
    tabHeaderTextColor: COLORS.black.shade900,
    tabBarBGColor: COLORS.white.shade100,
    tabBarFocusedColor: LIGHT.accent700,
    tabBarUnfocusedColor: COLORS.black.shade950,
  },

  dark: {
    statusBarBGColor: COLORS.black.shade950,
    screenColor: COLORS.black.shade900,
    tabHeaderBGColor: COLORS.black.shade950,
    tabHeaderTextColor: COLORS.white.shade100,
    tabBarBGColor: COLORS.black.shade950,
    tabBarFocusedColor: DARK.accent700,
    tabBarUnfocusedColor: COLORS.white.shade950,
  },
};

export default Theme;
