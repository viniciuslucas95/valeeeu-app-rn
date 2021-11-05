import React from 'react';
import { Path } from 'react-native-svg';
import { ColorConfig } from '../../../configs';
import { BaseIcon, IIcon } from './base-icon';

export function OptionsIcon(props: IIcon) {
  return (
    <BaseIcon {...props} baseSize={{ width: 4, height: 16 }}>
      <Path
        d='M2 4a2 2 0 110-4 2 2 0 010 4zM2 10a2 2 0 110-4 2 2 0 010 4zM0 14a2 2 0 104 0 2 2 0 00-4 0z'
        fill={props.color ?? ColorConfig.blue2}
      />
    </BaseIcon>
  );
}
