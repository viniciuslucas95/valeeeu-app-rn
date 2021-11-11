import React from 'react';
import { Path } from 'react-native-svg';

import { ColorConfig } from '../../../configs';
import { BaseIcon, ISvgIcon } from './base-icon';

export function MoreIcon(props: ISvgIcon) {
  return (
    <BaseIcon {...props} baseSize={{ width: 22, height: 22 }}>
      <Path d='M9 2a2 2 0 114 0v18a2 2 0 11-4 0V2z' fill={ColorConfig.white1} />
      <Path d='M20 9a2 2 0 110 4H2a2 2 0 110-4h18z' fill={ColorConfig.white1} />
    </BaseIcon>
  );
}
