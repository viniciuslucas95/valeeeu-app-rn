import React, { PropsWithChildren, useContext, useLayoutEffect } from 'react';
import Svg from 'react-native-svg';
import { SizeContext as sizeContext } from '../../../app/components/buttons/icon-button';
import { ViewElementStyle } from '../../../app/data-types/types';
import { SizeConfig } from '../../../configs';

interface IBaseSize {
  width: number;
  height: number;
}

interface IProps extends Omit<IIcon, 'color'> {
  baseSize: IBaseSize;
  children: JSX.Element | JSX.Element[];
}

type Size = 'big' | 'medium' | 'small' | 'tiny';

export interface IIcon {
  color?: string;
  size?: Size;
  style?: ViewElementStyle;
}

export function BaseIcon({
  baseSize: { width, height },
  style,
  children,
  size,
}: PropsWithChildren<IProps>) {
  const { setSize } = useContext(sizeContext);
  const viewBox = `0 0 ${width} ${height}`;
  const widthDifference = width / height;
  const newHeight = height * changeSize(size);
  const newWidth = newHeight * widthDifference;

  useLayoutEffect(() => {
    if (setSize)
      setSize({
        width: newWidth,
        height: newHeight,
      });
  }, []);

  function changeSize(size?: Size) {
    switch (size) {
      case 'big':
        return SizeConfig.bigIcon;
      case 'medium':
        return SizeConfig.mediumIcon;
      case 'small':
        return SizeConfig.smallIcon;
      case 'tiny':
        return SizeConfig.tinyIcon;
      case undefined:
        return SizeConfig.mediumIcon;
    }
  }

  return (
    <Svg
      width={newWidth}
      height={newHeight}
      viewBox={viewBox}
      fill='none'
      style={style}
    >
      {children}
    </Svg>
  );
}
