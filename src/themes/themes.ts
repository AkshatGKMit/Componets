import COLORS, { DARK, LIGHT } from '@src/constants/colors';

const Theme: Theme = {
  light: {
    screenColor: COLORS.white,
    tabHeaderBGColor: COLORS.white,
    tabHeaderTextColor: COLORS.black,
    tabBarBGColor: COLORS.white,
    tabBarFocusedColor: LIGHT.accent700,
    tabBarUnfocusedColor: COLORS.black,
  },

  dark: {
    screenColor: COLORS.black,
    tabHeaderBGColor: COLORS.black,
    tabHeaderTextColor: COLORS.white,
    tabBarBGColor: COLORS.black,
    tabBarFocusedColor: DARK.accent700,
    tabBarUnfocusedColor: COLORS.white,
  },
};

export default Theme;
