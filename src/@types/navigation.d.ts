import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { MaterialTopTabBarProps } from '@react-navigation/material-top-tabs';
import { NavigationProp } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  type DrawerParamList = {
    MainTab: undefined;
    Settings: undefined;
    StackScreens: undefined;
  };

  type TabParamList = {
    Basic: undefined;
    Advance: undefined;
  };

  type StackParamList = {
    Page1: undefined;
    Page2: undefined;
    Page3: undefined;
  };

  type MainTabScreenParamList = DrawerScreenProps<DrawerParamList, 'MainTab'>;
  type SettingsScreenParamList = DrawerScreenProps<DrawerParamList, 'Settings'>;
  type StackScreensScreenParamList = DrawerScreenProps<DrawerParamList, 'StackScreens'>;

  type HomeScreenParamList = BottomTabBarProps<TabParamList, 'Basic'>;
  type ProfileScreenParamList = BottomTabBarProps<TabParamList, 'Advance'>;

  type HomeScreenParamList = MaterialTopTabBarProps<TabParamList, 'Basic'>;
  type ProfileScreenParamList = MaterialTopTabBarProps<TabParamList, 'Advance'>;

  type Page1ScreenParamList = NavigationProp<StackParamList, 'Page1'>;
  type Page2ScreenParamList = NavigationProp<StackParamList, 'Page2'>;
  type Page3ScreenParamList = NavigationProp<StackParamList, 'Page3'>;
}
