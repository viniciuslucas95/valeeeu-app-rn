import { ViewElementStyle } from '../../dataTypes/types';

export interface IProps {
  children: string;
  onPress(): void;
  style?: ViewElementStyle;
}
