import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { UnitHandler } from '../../../app/helpers';
import { ColorConstant } from '../../../configs/constants';
import { ISvg } from '../ISvg';

export function HidePasswordIcon({ style, color, size }: ISvg) {
  const adjustedSize = (size ?? UnitHandler.vw(1)) / 3.5;

  return (
    <Svg
      width={24 * adjustedSize}
      height={19 * adjustedSize}
      viewBox={'0 0 24 19'}
      fill='none'
      style={style}
    >
      <Path
        d='M19.71 0l-3.347 3.169a13.093 13.093 0 00-4.243-.706C4.551 2.463.105 9.08.105 9.08s1.928 2.98 5.146 5.19l-2.91 2.939 1.413 1.428L21.124 1.43 19.71 0zm-6.017 5.838c-3.288-1.468-6.68 1.927-5.265 5.26l-1.726 1.724c-1.814-1.172-3.225-2.677-4.06-3.698 1.493-1.665 4.817-4.64 9.478-4.64.927 0 1.796.12 2.61.318l-1.037 1.036zm-2.883 7.507L15.9 8.3c1.017 3.143-2.003 6.129-5.09 5.044zM24.105 9.08s-4.252 7.525-11.985 7.525c-1.379 0-2.662-.294-3.85-.745l1.613-1.599a8.461 8.461 0 002.237.323c4.791 0 8.104-3.563 9.504-5.418a15.346 15.346 0 00-3.587-2.982l1.49-1.475c2.981 1.919 4.578 4.37 4.578 4.37z'
        fill={color ?? ColorConstant.gray}
      />
    </Svg>
  );
}
