import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

declare global {
  type BottomTabParamList = {
    Home: undefined;
    Profile: undefined;
  };

  type HomeScreenParamList = BottomTabBarProps<BottomTabParamList, 'Home'>;
  type ProfileScreenParamList = BottomTabBarProps<BottomTabParamList, 'Profile'>;
}
