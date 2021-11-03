import React from 'react';
import { Path } from 'react-native-svg';
import { ColorConstant } from '../../../configs';
import { BaseIcon, IIcon } from './base-icon';

export function EyeIcon(props: IIcon) {
  return (
    <BaseIcon {...props} baseSize={{ width: 33, height: 22 }}>
      <Path
        d='M32.8 10.164C29.695 4.102 23.544 0 16.5 0 9.457 0 3.305 4.104.2 10.164a1.854 1.854 0 000 1.672C3.305 17.898 9.456 22 16.5 22c7.043 0 13.195-4.104 16.3-10.164a1.854 1.854 0 000-1.672zM16.5 19.25a8.25 8.25 0 110-16.5 8.25 8.25 0 010 16.5zm0-13.75a5.46 5.46 0 00-1.45.217 2.741 2.741 0 01-3.833 3.833A5.487 5.487 0 1016.5 5.5z'
        fill={props.color ?? ColorConstant.blue2}
      />
    </BaseIcon>
  );
}
