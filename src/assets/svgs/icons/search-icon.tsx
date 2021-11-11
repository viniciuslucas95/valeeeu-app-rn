import React from 'react';
import { Path } from 'react-native-svg';

import { IconColor } from '../../../app/constants';
import { BaseIcon, ISvgIcon } from './base-icon';

export function SearchIcon(props: ISvgIcon) {
  return (
    <BaseIcon {...props} baseSize={{ width: 22, height: 22 }}>
      <Path
        d='M13.98 14.994l-.307-.307-.347.26a8.022 8.022 0 111.621-1.621l-.26.347.307.306 6.296 6.296a.718.718 0 01-1.015 1.015l-6.296-6.296zm-5.458.115a6.587 6.587 0 100-13.174 6.587 6.587 0 000 13.174z'
        fill={props.color ?? IconColor.active}
        stroke={props.color ?? IconColor.active}
      />
    </BaseIcon>
  );
}
