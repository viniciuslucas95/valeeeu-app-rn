import { SizeConfig } from '../../../configs';
import { ViewElementStyle } from '../../data-types/types';
import { pressableAreaAdjust } from '../toggles/home-area-toggles';

export function getMarginsForList(index: number, dataLength: number) {
  const margin = SizeConfig.bigMargin - pressableAreaAdjust;
  const style: ViewElementStyle =
    index === 0
      ? {
          marginLeft: margin,
        }
      : index === dataLength - 1
      ? { marginRight: margin }
      : null;
  return style;
}
