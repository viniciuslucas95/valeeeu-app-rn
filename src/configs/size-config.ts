import { UnitHandler } from '../app/helpers';

export class SizeConfig {
  static readonly hugeMargin = 30;
  static readonly bigMargin = 20;
  static readonly mediumMargin = 12;
  static readonly smallMargin = 6;
  static readonly tinyMargin = 3;
  static readonly maxElementWidth = UnitHandler.vw(100) - this.bigMargin * 2;
  static readonly buttonPressableArea = 48;
  static readonly inputLabelPositionAdjust = UnitHandler.rem(10);
  static readonly bigText = 16;
  static readonly mediumText = 14;
  static readonly smallText = 12;
  static readonly tinyText = 10;
  static readonly borderRadius = 4;
  static readonly thickBorderWidth = 1.2;
  static readonly thinBorderWidth = 0.6;
  static readonly bigIcon = 1;
  static readonly mediumIcon = 0.7272727272727273;
  static readonly smallIcon = 0.5909090909090909;
  static readonly tinyIcon = 0.4545454545454545;
  static readonly imageSize = 150;
}
