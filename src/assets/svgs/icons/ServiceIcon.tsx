import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { UnitHandler } from '../../../app/helpers';
import { ColorConstant } from '../../../configs/constants';
import { ISvg } from '../ISvg';

export function ServiceIcon({ style, color, size }: ISvg) {
  const adjustedSize = (size ?? UnitHandler.vw(1)) / 3.5;

  return (
    <Svg
      width={19 * adjustedSize}
      height={17 * adjustedSize}
      viewBox={'0 0 19 17'}
      fill='none'
      style={style}
    >
      <Path
        d='M17.417 5.7v8.957H1.583V5.7h15.834zM19 5.071a1 1 0 00-1-1H1a1 1 0 00-1 1v10.215a1 1 0 001 1h17a1 1 0 001-1V5.07zM7.125 0c-.874 0-1.583.73-1.583 1.629v1.628h1.583V2.036c0-.225.177-.407.396-.407h3.958c.219 0 .396.182.396.407v1.221h1.583V1.63c0-.9-.709-1.629-1.583-1.629h-4.75z'
        fill={color ?? ColorConstant.gray}
      />
    </Svg>
  );
}
