import React from 'react';
import { Path } from 'react-native-svg';
import { ColorConfig } from '../../../configs';
import { BaseIcon, IIcon } from './base-icon';

export function OptionsIcon(props: IIcon) {
  return (
    <BaseIcon {...props} baseSize={{ width: 6, height: 22 }}>
      <Path
        d='M2.75 5.5a2.75 2.75 0 110-5.5 2.75 2.75 0 010 5.5zM2.75 13.75a2.75 2.75 0 110-5.5 2.75 2.75 0 010 5.5zM0 19.25a2.75 2.75 0 105.5 0 2.75 2.75 0 00-5.5 0z'
        fill={props.color ?? ColorConfig.blue2}
      />
    </BaseIcon>
  );
}
