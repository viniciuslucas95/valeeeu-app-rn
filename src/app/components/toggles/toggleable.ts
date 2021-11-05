import { ITouchableProps } from '../auxiliaries/touchable-container';

export interface IToggleable {
  isToggled: boolean;
}

export type Toggleable = ITouchableProps & Partial<IToggleable>;
