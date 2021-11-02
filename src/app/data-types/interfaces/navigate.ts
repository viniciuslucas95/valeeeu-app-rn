import { ParamListBase } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export interface INavigate {
  navigation: StackNavigationProp<ParamListBase, string>;
}
