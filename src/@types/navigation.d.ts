import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { MaterialTopTabBarProps } from '@react-navigation/material-top-tabs';

declare global {
  type DrawerParamList = {
    MainTab: undefined;
    Settings: undefined;
  };

  type TabParamList = {
    Basic: undefined;
    Advance: undefined;
  };

  type MainTabScreenParamList = DrawerScreenProps<DrawerParamList, 'MainTab'>;
  type SettingsScreenParamList = DrawerScreenProps<DrawerParamList, 'Settings'>;

  type HomeScreenParamList = BottomTabBarProps<TabParamList, 'Basic'>;
  type ProfileScreenParamList = BottomTabBarProps<TabParamList, 'Advance'>;

  type HomeScreenParamList = MaterialTopTabBarProps<TabParamList, 'Basic'>;
  type ProfileScreenParamList = MaterialTopTabBarProps<TabParamList, 'Advance'>;
}
