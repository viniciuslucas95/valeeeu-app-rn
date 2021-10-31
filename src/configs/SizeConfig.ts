import { UnitHandler } from '../app/helpers';
import { SizeConstant } from './constants';

export class SizeConfig {
  // Button
  static readonly buttonPressableAreaVwPx = UnitHandler.vwPx(
    SizeConstant.buttonPressableArea
  );
  static readonly buttonPressableAreaVw = UnitHandler.vw(
    SizeConstant.buttonPressableArea
  );
  static readonly buttonPressableBorderRadiusVwPx = UnitHandler.vwPx(
    SizeConstant.buttonPressableArea / 2
  );

  // Text
  static readonly headerTitleVwPx = UnitHandler.vwPx(SizeConstant.bigText);
  static readonly headerTitleVw = UnitHandler.vw(SizeConstant.bigText);
  static readonly defaultTextVwPx = UnitHandler.vwPx(SizeConstant.mediumText);

  // Margin
  static readonly hugeMarginVw = UnitHandler.vw(SizeConstant.hugeMargin);
  static readonly hugeMarginVwPx = UnitHandler.vwPx(SizeConstant.hugeMargin);
  static readonly bigMarginVw = UnitHandler.vw(SizeConstant.bigMargin);
  static readonly bigMarginVwPx = UnitHandler.vwPx(SizeConstant.bigMargin);
  static readonly mediumMarginVw = UnitHandler.vw(SizeConstant.mediumMargin);
  static readonly mediumMarginVwPx = UnitHandler.vwPx(
    SizeConstant.mediumMargin
  );
  static readonly smallMarginVw = UnitHandler.vw(SizeConstant.smallMargin);
  static readonly smallMarginVwPx = UnitHandler.vwPx(SizeConstant.smallMargin);
  static readonly tinyMarginVw = UnitHandler.vw(SizeConstant.tinyMargin);
  static readonly tinyMarginVwPx = UnitHandler.vwPx(SizeConstant.tinyMargin);

  // Element
  static readonly maxElementWidthVwPx = UnitHandler.vwPx(
    100 - SizeConstant.hugeMargin * 2
  );
  static readonly maxElementWidthVw = UnitHandler.vw(
    100 - SizeConstant.hugeMargin * 2
  );
  static readonly bigElementHeightVwPx = UnitHandler.vwPx(
    SizeConstant.bigElementHeight
  );

  // Border
  static readonly borderRadiusVwPx = UnitHandler.vwPx(
    SizeConstant.borderRadius
  );
  static readonly hugeBorderWidthVwPx = UnitHandler.vwPx(
    SizeConstant.hugeBorderWidth
  );
  static readonly bigBorderWidthVwPx = UnitHandler.vwPx(
    SizeConstant.bigBorderWidth
  );
  static readonly mediumBorderWidthVwPx = UnitHandler.vwPx(
    SizeConstant.mediumBorderWidth
  );
  static readonly smallBorderWidthVwPx = UnitHandler.vwPx(
    SizeConstant.smallBorderWidth
  );
}
