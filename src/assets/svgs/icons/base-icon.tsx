import React, { PropsWithChildren } from 'react';
import Svg from 'react-native-svg';

import { ViewStyle } from '../../../app/types';

interface ISize {
  width: number;
  height: number;
}

interface IMarginFromBorder {
  borderSide: 'left' | 'right';
  areaWidth: number;
}

export interface ISvgIcon {
  color?: string;
  style?: ViewStyle;
  height?: number;
  marginFromBorder?: IMarginFromBorder;
}

interface IProps extends Omit<ISvgIcon, 'color'> {
  baseSize: ISize;
  children: JSX.Element | JSX.Element[];
}

function getNewMargin(
  marginFromBorder: IMarginFromBorder,
  width: number
): ViewStyle {
  const { areaWidth, borderSide } = marginFromBorder;
  const marginValue = -(areaWidth - width) / 2;
  return borderSide === 'left'
    ? {
        marginLeft: marginValue,
      }
    : {
        marginRight: marginValue,
      };
}

export function BaseIcon({
  baseSize: { width: baseWidth, height: baseHeight },
  style,
  children,
  height: newHeight = baseHeight,
  marginFromBorder,
}: PropsWithChildren<IProps>) {
  const viewBox = `0 0 ${baseWidth} ${baseHeight}`;
  const widthDifference = baseWidth / baseHeight;
  const newWidth = newHeight * widthDifference;
  const newMargin = marginFromBorder
    ? getNewMargin(marginFromBorder, newWidth)
    : null;

  return (
    <Svg
      width={newWidth}
      height={newHeight}
      viewBox={viewBox}
      fill='none'
      style={[newMargin, style]}
    >
      {children}
    </Svg>
  );
}
