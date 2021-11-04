import React from 'react';
import { Path } from 'react-native-svg';
import { ColorConfig } from '../../../configs';
import { BaseIcon, IIcon } from './base-icon';

export function CloseIcon(props: IIcon) {
  return (
    <BaseIcon {...props} baseSize={{ width: 22, height: 22 }}>
      <Path
        d='M.615.615c-.82.819-.82 2.147 0 2.967L8.033 11 .615 18.418a2.098 2.098 0 002.967 2.968L11 13.966l7.418 7.418a2.098 2.098 0 002.968-2.967L13.966 11l7.418-7.418A2.098 2.098 0 1018.419.615L11 8.033 3.582.615a2.098 2.098 0 00-2.967 0z'
        fill={props.color ?? ColorConfig.blue2}
      />
    </BaseIcon>
  );
}
