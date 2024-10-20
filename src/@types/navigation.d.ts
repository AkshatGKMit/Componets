import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { DrawerScreenProps } from '@react-navigation/drawer';

declare global {
  type DrawerParamList = {
    MainTab: undefined;
    Settings: undefined;
  };

  type BottomTabParamList = {
    Home: undefined;
    Profile: undefined;
  };

  type MainTabScreenParamList = DrawerScreenProps<DrawerParamList, 'MainTab'>;
  type SettingsScreenParamList = DrawerScreenProps<DrawerParamList, 'Settings'>;

  type HomeScreenParamList = BottomTabBarProps<BottomTabParamList, 'Home'>;
  type ProfileScreenParamList = BottomTabBarProps<BottomTabParamList, 'Profile'>;
}
