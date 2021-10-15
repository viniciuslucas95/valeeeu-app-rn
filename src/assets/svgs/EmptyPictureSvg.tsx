import React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';
import { UnitHandler } from '../../app/helpers';
import { ColorConstant } from '../../configs/constants';
import { ISvg } from './ISvg';

export function EmptyPictureSvg({ style, size }: Omit<ISvg, 'color'>) {
  const adjustedSize = (size ?? UnitHandler.vw(1)) / 3.5;

  return (
    <Svg
      width={100 * adjustedSize}
      height={100 * adjustedSize}
      viewBox='0 0 100 100'
      fill='none'
      style={style}
    >
      <Rect width={100} height={100} rx={4} fill={ColorConstant.lightGray} />
      <Path
        d='M2.748 99.8A4.002 4.002 0 010 96v-6.665l27.286-40.791L48.55 65.4 70.143 31 100 78.93V96a4.002 4.002 0 01-2.748 3.8H2.748zM37.857 14C30.76 14 25 19.78 25 26.9c0 7.13 5.76 12.9 12.857 12.9 7.097 0 12.857-5.77 12.857-12.9 0-7.12-5.76-12.9-12.857-12.9z'
        fill={ColorConstant.gray}
      />
    </Svg>
  );
}
