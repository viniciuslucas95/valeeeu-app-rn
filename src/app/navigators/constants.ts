import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { StackNavigationOptions } from '@react-navigation/stack';

export const noHeader: StackNavigationOptions & BottomTabNavigationOptions = {
  headerShown: false,
};
