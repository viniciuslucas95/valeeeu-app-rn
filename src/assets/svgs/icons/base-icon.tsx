import React, { PropsWithChildren, useContext, useLayoutEffect } from 'react';
import Svg from 'react-native-svg';
import { SizeContext as sizeContext } from '../../../app/components/buttons/icon-button';
import { IStyleable } from '../../../app/data-types/interfaces';
import { SizeConfig } from '../../../configs';
import { ISvgProps } from '../base-svg';

type Size = 'big' | 'medium' | 'small' | 'tiny';

interface IHaveSize {
  size?: Size;
}

export interface IIcon extends IStyleable, IHaveSize {
  color?: string;
}

export function BaseIcon({
  baseSize: { width, height },
  style,
  children,
  size = 'medium',
}: PropsWithChildren<ISvgProps & IHaveSize>) {
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
