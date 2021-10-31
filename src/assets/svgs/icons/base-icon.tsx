import React, { PropsWithChildren, useContext, useLayoutEffect } from 'react';
import Svg from 'react-native-svg';
import { sizeContext } from '../../../app/components';
import { IconSize } from '../../../app/data-types/enums';
import { ViewElementStyle } from '../../../app/data-types/types';
import { UnitHandler } from '../../../app/helpers';
import { SizeConstant } from '../../../configs/constants';

interface IBaseSize {
  width: number;
  height: number;
}

interface IProps extends Omit<IIcon, 'color'> {
  baseSize: IBaseSize;
  children: JSX.Element | JSX.Element[];
  screenWidthReference?: number;
}

const baseScreenWidthReference = 360;

export interface IIcon {
  color?: string;
  size?: 'big' | 'medium' | 'small' | 'tiny';
  style?: ViewElementStyle;
}

export function BaseIcon({
  baseSize: { width, height },
  size,
  style,
  children,
  screenWidthReference,
}: PropsWithChildren<IProps>) {
  const { setSize } = useContext(sizeContext);
  const viewBox = `0 0 ${width} ${height}`;
  const screenWidth = UnitHandler.vw(100);
  const newHeightBasedOnScreenSize =
    ((height * screenWidth) /
      (screenWidthReference ?? baseScreenWidthReference)) *
    adjustSize(size);
  const widthDifferenceFromHeight = width / height;
  const newWidthBasedOnDifferenceFromHeight =
    newHeightBasedOnScreenSize * widthDifferenceFromHeight;

  function adjustSize(size?: string) {
    switch (size) {
      case IconSize.big:
        return SizeConstant.bigSvgAdjuster;
      case IconSize.medium:
        return SizeConstant.mediumSvgAdjuster;
      case IconSize.small:
        return SizeConstant.smallSvgAdjuster;
      case IconSize.tiny:
        return SizeConstant.tinySvgAdjuster;
      default:
        return SizeConstant.bigSvgAdjuster;
    }
  }

  useLayoutEffect(() => {
    if (setSize)
      setSize({
        width: newWidthBasedOnDifferenceFromHeight,
        height: newHeightBasedOnScreenSize,
      });
  }, []);

  return (
    <Svg
      width={newWidthBasedOnDifferenceFromHeight}
      height={newHeightBasedOnScreenSize}
      viewBox={viewBox}
      fill='none'
      style={style}
    >
      {children}
    </Svg>
  );
}
