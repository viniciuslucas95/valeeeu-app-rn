import React, { PropsWithChildren } from 'react';
import Svg from 'react-native-svg';
import { IStyleable } from '../../app/data-types/props';

interface IHaveWidth {
  width: number;
}

interface IBaseSize extends IHaveWidth {
  height: number;
}

export interface ISvgProps extends Omit<ISvg, 'color'> {
  baseSize: IBaseSize;
  children: JSX.Element | JSX.Element[];
}

export interface ISvg extends Partial<IHaveWidth>, IStyleable {
  color?: string;
}

export function BaseSvg({
  baseSize: { width, height },
  style,
  children,
  width: newWidth,
}: PropsWithChildren<ISvgProps>) {
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
