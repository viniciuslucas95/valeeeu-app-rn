import React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';
import { UnitHandler } from '../../app/helpers';
import { ColorConstant } from '../../configs/constants';
import { ISvg } from './ISvg';

export function EmptyProfilePictureSvg({ style, size }: Omit<ISvg, 'color'>) {
  const adjustedSize = (size ?? UnitHandler.vw(1)) / 3.5;

  return (
    <Svg
      width={75 * adjustedSize}
      height={75 * adjustedSize}
      viewBox='0 0 75 75'
      fill='none'
      style={style}
    >
      <Circle cx={37.5} cy={37.5} r={37.5} fill={ColorConstant.lightGray} />
      <Path
        d='M10.5 62.9c1.165-1.072 2.889-1.887 5.435-2.475l.513-.119c8.127-1.873 15.915-3.668 12.053-10.788C16.82 27.968 25.17 15.75 37.715 15.75c12.302 0 20.867 11.766 9.214 33.768-3.778 7.136 3.876 8.901 12.24 10.831l.326.076c2.843.657 4.66 1.597 5.82 2.862C58.48 70.5 48.81 75 38.088 75 27.176 75 17.353 70.34 10.5 62.9z'
        fill={ColorConstant.gray}
      />
    </Svg>
  );
}
