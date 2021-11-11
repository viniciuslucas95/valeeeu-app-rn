import React from 'react';
import { Path } from 'react-native-svg';

import { ColorConfig } from '../../../configs';
import { BaseIcon, ISvgIcon } from './base-icon';

export function HeartIcon(props: ISvgIcon) {
  return (
    <BaseIcon {...props} baseSize={{ width: 24, height: 22 }}>
      <Path
        d='M19.5 9a4.502 4.502 0 00-4.5 4.5c0 2.485 2.017 4.5 4.5 4.5s4.5-2.015 4.5-4.5S21.983 9 19.5 9zm2.5 5h-2v2h-1v-2h-2v-1h2v-2h1v2h2v1zm-6.527 4.593C14.365 19.68 13.198 20.813 12 22 5.57 15.62 0 10.853 0 6.192 0-.577 8.852-2.154 12 3.248 15.125-2.114 24-.6 24 6.192c0 .746-.156 1.496-.423 2.253A6.466 6.466 0 0019.5 7a6.508 6.508 0 00-6.5 6.5 6.49 6.49 0 002.473 5.093z'
        fill={props.color ?? ColorConfig.blue2}
      />
    </BaseIcon>
  );
}
