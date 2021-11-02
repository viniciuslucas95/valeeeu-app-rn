import React, { PropsWithChildren } from 'react';
import Svg from 'react-native-svg';
import { ViewElementStyle } from '../../app/data-types/types';

interface IBaseSize {
  width: number;
  height: number;
}

interface IProps extends Omit<ISvg, 'color'> {
  baseSize: IBaseSize;
  children: JSX.Element | JSX.Element[];
}

export interface ISvg {
  width?: number;
  color?: string;
  style?: ViewElementStyle;
}

export function BaseSvg({
  baseSize: { width, height },
  style,
  children,
  width: newWidth,
}: PropsWithChildren<IProps>) {
  const viewBox = `0 0 ${width} ${height}`;
  const newWidthDifference = (newWidth ?? width) / width;
  const newHeight = height * newWidthDifference;

  return (
    <Svg
      width={newWidth ?? width}
      height={newHeight}
      viewBox={viewBox}
      fill='none'
      style={style}
    >
      {children}
    </Svg>
  );
}
