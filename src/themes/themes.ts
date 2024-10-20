import COLORS, { DARK, LIGHT } from '@src/constants/colors';

const Theme: Theme = {
  light: {
    statusBarBGColor: COLORS.white.shade100,
    screenColor: COLORS.white.shade300,
    tabHeaderBGColor: COLORS.white.shade50,
    tabHeaderTextColor: COLORS.black.shade800,
    tabBarBGColor: COLORS.white.shade50,
    tabBarFocusedColor: LIGHT.accent700,
    tabBarUnfocusedColor: COLORS.black.shade950,
  },

  dark: {
    statusBarBGColor: COLORS.black.shade900,
    screenColor: COLORS.black.shade700,
    tabHeaderBGColor: COLORS.black.shade950,
    tabHeaderTextColor: COLORS.white.shade200,
    tabBarBGColor: COLORS.black.shade950,
    tabBarFocusedColor: DARK.accent700,
    tabBarUnfocusedColor: COLORS.white.shade950,
  },
};

export default Theme;
