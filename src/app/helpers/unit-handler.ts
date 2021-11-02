import { Dimensions, PixelRatio, StatusBar } from 'react-native';

export class UnitHandler {
  private static readonly width = Dimensions.get('window').width;
  private static readonly height =
    Dimensions.get('window').height + (StatusBar.currentHeight ?? 0);

  static vw(value: number) {
    return (this.width / 100) * value;
  }

  static vh(value: number) {
    return (this.height / 100) * value;
  }

  static rem(value: number) {
    return value * PixelRatio.getFontScale();
  }
}
