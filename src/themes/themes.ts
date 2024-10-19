import COLORS, { DARK, LIGHT } from '@src/constants/colors';

const Theme = {
  light: {
    tabBarFocusedColor: LIGHT.accent700,
    tabBarUnfocusedColor: COLORS.black,
  },

  dark: {
    tabBarFocusedColor: DARK.accent700,
    tabBarUnfocusedColor: COLORS.white,
  },
};

export default Theme;
