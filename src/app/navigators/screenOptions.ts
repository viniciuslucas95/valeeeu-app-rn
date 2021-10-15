import { ParamListBase, RouteProp } from '@react-navigation/native';
import {
  CardStyleInterpolators,
  StackNavigationOptions,
} from '@react-navigation/stack';
import { ColorConstant } from '../../configs/constants';

export const screenOptions:
  | StackNavigationOptions
  | ((props: {
      route: RouteProp<ParamListBase, string>;
      navigation: any;
    }) => StackNavigationOptions)
  | undefined = {
  headerStyle: { backgroundColor: ColorConstant.purple },
  headerTintColor: ColorConstant.white,
  headerTitleStyle: { fontFamily: 'Roboto_500Medium' },
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
};
