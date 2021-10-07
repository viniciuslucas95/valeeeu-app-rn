import { Dimensions, StatusBar } from 'react-native';

export class UnitHandler {
  private readonly width = Dimensions.get('window').width;
  private readonly height =
    Dimensions.get('window').height + (StatusBar.currentHeight ?? 0);

  vw(value: number) {
    return (this.width / 100) * value;
  }

  vh(value: number) {
    return (this.height / 100) * value;
  }

  vwPx(value: number) {
    return (this.width / 100) * value + 'px';
  }

  vhPx(value: number) {
    return (this.height / 100) * value + 'px';
  }
}
