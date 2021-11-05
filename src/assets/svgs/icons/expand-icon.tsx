import React from 'react';
import { Path } from 'react-native-svg';
import { ColorConfig } from '../../../configs';
import { BaseIcon, IIcon } from './base-icon';

export function ExpandIcon(props: IIcon) {
  return (
    <BaseIcon {...props} baseSize={{ width: 27, height: 16 }}>
      <Path
        d='M.184 1.944a.627.627 0 000 .887l12.415 12.415a.625.625 0 00.478.183.624.624 0 00.478-.183L25.97 2.831a.627.627 0 000-.887L24.64.614a.627.627 0 00-.887 0L13.077 11.29 2.4.614a.627.627 0 00-.887 0l-1.33 1.33z'
        fill={props.color ?? ColorConfig.blue2}
      />
    </BaseIcon>
  );
}
