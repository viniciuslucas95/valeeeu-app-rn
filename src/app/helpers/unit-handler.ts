import { Dimensions, PixelRatio, StatusBar } from 'react-native';

export class UnitHandler {
  private static readonly width = Dimensions.get('window').width;
  private static readonly widthScreen = Dimensions.get('screen').width;
  private static readonly height =
    Dimensions.get('window').height + (StatusBar.currentHeight ?? 0);
  private static readonly heightScreen =
    Dimensions.get('screen').height + (StatusBar.currentHeight ?? 0);

  static vw(value: number) {
    return (this.width / 100) * value;
  }

  static vwScreen(value: number) {
    return (this.widthScreen / 100) * value;
  }

  static vhScreen(value: number) {
    return (this.heightScreen / 100) * value;
  }

  static vh(value: number) {
    return (this.height / 100) * value;
  }

  static rem(value: number) {
    return value * PixelRatio.getFontScale();
  }
}
