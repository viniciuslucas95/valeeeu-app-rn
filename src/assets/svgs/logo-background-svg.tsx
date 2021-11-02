import React from 'react';
import { Path } from 'react-native-svg';
import { ThemeConfig } from '../../configs';
import { BaseSvg, ISvg } from './base-svg';

export function LogoBackgroundSvg(props: ISvg) {
  return (
    <BaseSvg {...props} baseSize={{ width: 360, height: 238 }}>
      <Path
        d='M180 238c154.64 0 280-125.36 280-280h-560c0 154.64 125.36 280 280 280z'
        fill={props.color ?? ThemeConfig.app}
      />
    </BaseSvg>
  );
}
