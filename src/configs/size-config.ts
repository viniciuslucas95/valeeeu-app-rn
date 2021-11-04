import { UnitHandler } from '../app/helpers';

export class SizeConfig {
  // Margins
  static readonly hugeMargin = 30;
  static readonly bigMargin = 20;
  static readonly mediumMargin = 12;
  static readonly smallMargin = 4;
  static readonly tinyMargin = 2;

  // Elements
  static readonly maxElementWidth = UnitHandler.vw(100) - this.bigMargin * 2;
  static readonly buttonPressableArea = 48;
  static readonly inputLabelPositionAdjust = UnitHandler.rem(10);

  // Texts
  static readonly bigText = 16;
  static readonly mediumText = 14;
  static readonly smallText = 12;
  static readonly tinyText = 10;

  // Borders
  static readonly borderRadius = 4;
  static readonly thickBorderWidth = 1.2;
  static readonly thinBorderWidth = 0.6;

  // Icons
  static readonly bigIcon = 1;
  static readonly mediumIcon = 0.7272727272727273;
  static readonly smallIcon = 0.5909090909090909;
  static readonly tinyIcon = 0.4090909090909091;
}
