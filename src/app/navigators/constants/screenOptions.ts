import { ParamListBase, RouteProp } from '@react-navigation/native';
import {
  CardStyleInterpolators,
  StackNavigationOptions,
} from '@react-navigation/stack';

export const screenOptions:
  | StackNavigationOptions
  | ((props: {
      route: RouteProp<ParamListBase, string>;
      navigation: any;
    }) => StackNavigationOptions)
  | undefined = {
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
};
