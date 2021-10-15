import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { UnitHandler } from '../../../app/helpers';
import { ColorConstant } from '../../../configs/constants';
import { ISvg } from '../ISvg';

export function ShowPasswordIcon({ style, color, size }: ISvg) {
  const adjustedSize = (size ?? UnitHandler.vw(1)) / 3.5;

  return (
    <Svg
      width={24 * adjustedSize}
      height={14 * adjustedSize}
      viewBox={'0 0 24 14'}
      fill='none'
      style={style}
    >
      <Path
        d='M12.015 2c4.751 0 8.063 3.012 9.504 4.636C20.118 8.473 16.806 12 12.015 12c-4.42 0-7.93-3.536-9.478-5.407C4.03 4.946 7.354 2 12.015 2zm0-2C4.446 0 0 6.551 0 6.551S4.835 14 12.015 14C19.748 14 24 6.551 24 6.551S19.709 0 12.015 0zM12 3a4 4 0 10.002 8.002A4 4 0 0012 3z'
        fill={color ?? ColorConstant.gray}
      />
    </Svg>
  );
}
