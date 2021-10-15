import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { UnitHandler } from '../../../app/helpers';
import { ColorConstant } from '../../../configs/constants';
import { ISvg } from '../ISvg';

export function SearchIcon({ style, color, size }: ISvg) {
  const adjustedSize = (size ?? UnitHandler.vw(1)) / 3.5;

  return (
    <Svg
      width={18 * adjustedSize}
      height={18 * adjustedSize}
      viewBox={'0 0 18 18'}
      fill='none'
      style={style}
    >
      <Path
        d='M16.907 18L11.2 12.292c-1.04.958-2.883 1.618-4.244 1.618A6.954 6.954 0 010 6.955 6.954 6.954 0 016.955 0a6.954 6.954 0 016.955 6.955c0 1.36-.66 3.204-1.618 4.244L18 16.907 16.907 18zm-9.952-5.636a5.416 5.416 0 005.41-5.41 5.416 5.416 0 00-5.41-5.408 5.416 5.416 0 00-5.41 5.409 5.416 5.416 0 005.41 5.41z'
        fill={color ?? ColorConstant.gray}
      />
    </Svg>
  );
}
