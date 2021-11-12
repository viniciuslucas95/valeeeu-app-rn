import { MarginSizeConfig } from '../../../configs';
import { ViewStyle } from '../../types';

export function getListMargin(index: number, listLength: number): ViewStyle {
  return index === 0
    ? {
        marginLeft: MarginSizeConfig.big,
        marginRight: MarginSizeConfig.small,
      }
    : index === listLength - 1
    ? {
        marginLeft: MarginSizeConfig.small,
        marginRight: MarginSizeConfig.big,
      }
    : {
        marginHorizontal: MarginSizeConfig.small,
      };
}
