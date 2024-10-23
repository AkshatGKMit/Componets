import Routes from '@constants/routes';
import { BottomTabBarProps, BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { DrawerNavigationProp, DrawerScreenProps } from '@react-navigation/drawer';
import { MaterialTopTabBarProps } from '@react-navigation/material-top-tabs';
import { NavigationProp, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  type DrawerScreenNames = keyof typeof Routes.Drawer;
  type RootDrawerParamList = Record<DrawerScreenNames, undefined>;
  type DrawerNavigation = DrawerNavigationProp<RootDrawerParamList>;

  type TabScreenNames = keyof typeof Routes.Tabs;
  type RootTabParamList = Record<TabScreenNames, undefined>;
  type TabNavigation = BottomTabNavigationProp<RootTabParamList>;

  type PageStackScreenNames = keyof typeof Routes.PageStack;
  type RootPageStackScreenParamList = Record<PageStackScreenNames, undefined>;
  type PageStackScreenNavigation = NavigationProp<RootPageStackScreenParamList>;

  type AdvanceStackScreenNames = keyof typeof Routes.AdvanceStack;
  type RootAdvanceStackScreenParamList = Record<AdvanceStackScreenNames, undefined>;
  type AdvanceStackScreenNavigation = NavigationProp<RootAdvanceStackScreenParamList>;

  type DynamicTabScreenNames = keyof typeof Routes.DynamicTabs;
  type RootDynamicTabScreenParamList = Record<DynamicTabScreenNames, undefined>;
  type DynamicTabScreenNavigation = NavigationProp<RootDynamicTabScreenParamList>;
}
