import COLORS, { DARK, LIGHT } from '@src/constants/colors';

const Theme: Theme = {
  light: {
    screenColor: COLORS.white,
    tabBarBGColor: COLORS.white,
    tabBarFocusedColor: LIGHT.accent700,
    tabBarUnfocusedColor: COLORS.black,
  },

  dark: {
    screenColor: COLORS.black,
    tabBarBGColor: COLORS.black,
    tabBarFocusedColor: DARK.accent700,
    tabBarUnfocusedColor: COLORS.white,
  },
};

export default Theme;
