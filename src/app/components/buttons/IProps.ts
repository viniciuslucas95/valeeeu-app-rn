import { ViewElementStyle } from '../../dataTypes/types/elements';

export interface IProps {
  children: string;
  onPress(): void;
  style?: ViewElementStyle;
}
