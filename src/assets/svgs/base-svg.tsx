import React, { PropsWithChildren, useContext, useLayoutEffect } from 'react';
import Svg from 'react-native-svg';
import { ViewElementStyle } from '../../app/data-types/types';
import { UnitHandler } from '../../app/helpers';

interface IBaseSize {
  width: number;
  height: number;
}

interface IProps extends Omit<ISvg, 'color'> {
  baseSize: IBaseSize;
  children: JSX.Element | JSX.Element[];
  screenWidthReference?: number;
}

const baseScreenWidthReference = 360;

export interface ISvg {
  color?: string;
  style?: ViewElementStyle;
}

export function BaseSvg({
  baseSize: { width, height },
  style,
  children,
  screenWidthReference,
}: PropsWithChildren<IProps>) {
  const viewBox = `0 0 ${width} ${height}`;
  const screenWidth = UnitHandler.vw(100);
  const widthDifferenceFromReferenceScreen =
    width / (screenWidthReference ?? baseScreenWidthReference);
  const newWidthBasedOnScreen =
    screenWidth * widthDifferenceFromReferenceScreen;
  const heightDifferenceFromWidth = height / width;
  const newHeightBasedOnDifferenceFromWidth =
    widthDifferenceFromReferenceScreen * heightDifferenceFromWidth;

  return (
    <Svg
      width={newWidthBasedOnScreen}
      height={newHeightBasedOnDifferenceFromWidth}
      viewBox={viewBox}
      fill='none'
      style={style}
    >
      {children}
    </Svg>
  );
}
