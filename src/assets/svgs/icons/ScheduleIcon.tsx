import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { UnitHandler } from '../../../app/helpers';
import { ColorConstant } from '../../../configs/constants';
import { ISvg } from '../ISvg';

export function ScheduleIcon({ style, color, size }: ISvg) {
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
        d='M9 1.5c4.136 0 7.5 3.364 7.5 7.5s-3.364 7.5-7.5 7.5S1.5 13.136 1.5 9 4.864 1.5 9 1.5zM9 0a9 9 0 100 18A9 9 0 009 0zm4.386 9.344c.152.029.152.25 0 .28-1.43.27-4.533.832-4.91.832a.975.975 0 01-.975-.975c0-.384.577-4.085.843-5.584.026-.144.235-.136.258.01l.739 4.679 4.045.758z'
        fill={color ?? ColorConstant.gray}
      />
    </Svg>
  );
}
