import { PixelRatio } from 'react-native';

export function rem(value: number) {
  return value * PixelRatio.getFontScale();
}
