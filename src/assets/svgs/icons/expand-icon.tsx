import React from 'react';
import { Path } from 'react-native-svg';

import { ColorConfig } from '../../../configs';

import { BaseIcon, ISvgIcon } from './base-icon';

export function ExpandIcon(props: ISvgIcon) {
  return (
    <BaseIcon {...props} baseSize={{ width: 33, height: 22 }}>
      <Path
        d='M.232 2.22c-.31.36-.31.942 0 1.301l15.665 18.21a.731.731 0 00.603.267.73.73 0 00.603-.268L32.768 3.521c.31-.36.31-.941 0-1.3L31.09.268a.716.716 0 00-1.12 0L16.5 15.928 3.03.269a.716.716 0 00-1.12 0L.232 2.22z'
        fill={props.color ?? ColorConfig.blue2}
      />
    </BaseIcon>
  );
}
