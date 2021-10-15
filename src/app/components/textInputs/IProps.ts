import { ViewElementStyle } from '../../dataTypes/types';

export interface IProps {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  width?: string;
  placeholder?: string;
  style?: ViewElementStyle;
}
